<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class RepositoryMakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repo {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new model repository';

    private $modelName;
    private $controllerName;
    private $repoName;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->modelName = $this->argument('name');
        $this->controllerName = $this->modelName . "Controller";
        $this->repoName = $this->modelName . 'Repository';

        Artisan::call("make:model {$this->modelName} -mc");
        $this->addControllerMethods();
        $this->createDummyRepository();
        $this->appendRoutesInApi();
    }

    private function appendRoutesInApi()
    {
        $splittedModelName = $this->splitModelName();
        $urlParts = strtolower(join('_', $splittedModelName));

        $routes = "\n\n// " . strtolower(join(" ", $splittedModelName));

        $routes .= "\nRoute::post('/get_{$urlParts}s', [{$this->controllerName}::class, 'get{$this->modelName}s']);";
        $routes .= "\nRoute::post('/add_{$urlParts}', [{$this->controllerName}::class, 'add{$this->modelName}']);";
        $routes .= "\nRoute::post('/update_{$urlParts}', [{$this->controllerName}::class, 'update{$this->modelName}']);";
        $routes .= "\nRoute::post('/delete_{$urlParts}', [{$this->controllerName}::class, 'delete{$this->modelName}']);";

        $apiPath = base_path('routes/api.php');
        $apiFileContent = file_get_contents($apiPath);

        $phpTag = "<?php\n";
        $controllerNamespace = "App\\Http\\Controllers\\{$this->controllerName}";
        $_controllerNamespace = "{$phpTag} \nuse {$controllerNamespace};";
        $apiNewContent = str_replace($phpTag, $_controllerNamespace, $apiFileContent);
        $apiNewContent .= $routes;

        file_put_contents($apiPath, $apiNewContent);
        $this->info('API routes added successfully.');
    }

    private function addControllerMethods()
    {
        $controllerPath = app_path("Http/Controllers/{$this->controllerName}.php");

        if (!file_exists($controllerPath)) {
            return;
        }

        $repoControllerStub = base_path('stubs/RepoController.stub');
        $stubContent = file_get_contents($repoControllerStub);

        $stubContent = str_replace('_RepositoryName', $this->repoName, $stubContent);
        $stubContent = str_replace('_ModelName', $this->modelName, $stubContent);

        $splittedModelName = $this->splitModelName();

        $formattedName = '';

        if (count($splittedModelName) > 1) {
            $formattedName .= strtolower(reset($splittedModelName));
            $formattedName .= join('', array_slice($splittedModelName, 1));
        } else {
            $formattedName .= strtolower(join('', $splittedModelName));
        }

        $repoObjectName = $formattedName . "Repo";
        $varName = strtolower(join('_', $splittedModelName));
        $stubContent = str_replace('_repoName', $repoObjectName, $stubContent);
        $stubContent = str_replace('_repoInfo', $formattedName, $stubContent);
        $stubContent = str_replace('_repo_info', $varName, $stubContent);

        file_put_contents($controllerPath, $stubContent);
        $this->info('Controller methods added successfully.');
    }

    private function createDummyRepository()
    {
        $repoStub = base_path('stubs/Repository.stub');
        $repoStubContent = file_get_contents($repoStub);

        $repoDirectory = app_path('Repositories');
        $newRepoFilePath = $repoDirectory . "/{$this->repoName}.php";

        if (!is_dir($repoDirectory)) {
            mkdir($repoDirectory);
        }

        if (file_exists($newRepoFilePath)) {
            $this->error("{$this->repoName} already exists!");
            return false;
        }

        if (!file_exists(app_path("Models/{$this->modelName}.php"))) {
            $this->error("{$this->modelName} model not found!");
            return false;
        }

        $repoStubContent = str_replace('_ModelName', $this->modelName, $repoStubContent);
        $repoStubContent = str_replace('_RepositoryName', $this->repoName, $repoStubContent);
        $repoStubContent = $this->responseMessageModify($repoStubContent);

        file_put_contents($newRepoFilePath, $repoStubContent);

        $this->info('Repository created successfully.');
        $this->line("<info>Created Repository :</info> {$this->repoName}.php");
    }

    private function responseMessageModify($stubContent)
    {
        $str = join(' ', $this->splitModelName());
        $messageSubject = ucfirst(strtolower($str));
        return str_replace('_MessageSubject', $messageSubject, $stubContent);
    }

    private function splitModelName()
    {
        $arr = preg_split('/(?=[A-Z])/', $this->modelName);
        return array_slice($arr, 1);
    }
}
