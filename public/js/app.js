/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/chunks/" + ({"acl~appointment~department~doctors~patients~prescription":"acl~appointment~department~doctors~patients~prescription","acl":"acl","appointment":"appointment","department~doctor":"department~doctor","department":"department","prescription":"prescription","appointment-add":"appointment-add","appointment-edit":"appointment-edit","appointment-report":"appointment-report","dashboard":"dashboard","patient":"patient","vendors~doctor":"vendors~doctor","doctor":"doctor","vendors~doctors":"vendors~doctors","doctors~patients":"doctors~patients","doctors":"doctors","vendors~patients":"vendors~patients","patients":"patients"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/hospital/public/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    onClickaway: vue_clickaway__WEBPACK_IMPORTED_MODULE_0__["directive"]
  },
  data: function data() {
    return {
      showAlertDropdown: false,
      showMessageDropdown: false,
      showUserDropdown: false
    };
  },
  watch: {
    showAlertDropdown: function showAlertDropdown(val) {
      if (val) this.showMessageDropdown = this.showUserDropdown = false;
    },
    showMessageDropdown: function showMessageDropdown(val) {
      if (val) this.showAlertDropdown = this.showUserDropdown = false;
    },
    showUserDropdown: function showUserDropdown(val) {
      if (val) this.showAlertDropdown = this.showMessageDropdown = false;
    }
  },
  methods: {
    logout: function logout() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    onClickaway: vue_clickaway__WEBPACK_IMPORTED_MODULE_0__["directive"]
  },
  data: function data() {
    return {
      showSidebar: false,
      menuItems: [{
        text: "Dashboard",
        link: "/",
        icon: "fas fa-home"
      }, {
        text: "Department",
        link: "/department",
        icon: "fa fa-sitemap"
      }, {
        text: "Doctor",
        link: "/doctors",
        icon: "fa fa-user-md"
      }, {
        text: "Patient",
        link: "/patients",
        icon: "fa fa-wheelchair"
      }, {
        text: "Appointment",
        icon: "fa fa-edit",
        childrenShow: false,
        children: [{
          text: "Appointment List",
          link: "/appointment"
        }, {
          text: "Appointment Report",
          link: "/appointment/report"
        }]
      }, {
        text: "Prescription",
        icon: "fa fa-edit",
        childrenShow: false,
        children: [{
          text: "Prescription List",
          link: "/prescription"
        }, {
          text: "Case Study List",
          link: "/"
        }]
      }, {
        text: "Settings",
        icon: "fa fa-cog",
        childrenShow: false,
        children: [{
          text: "Access Control List",
          link: "/settings/acl"
        }]
      }]
    };
  },
  methods: {
    activateMenuItem: function activateMenuItem(menuItem) {
      if (menuItem.childrenShow) {
        menuItem.childrenShow = !menuItem.childrenShow;
      } else {
        this.menuItems.map(function (item) {
          return item.childrenShow = false;
        });
        menuItem.childrenShow = !menuItem.childrenShow;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./resources/js/components/Navbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SideBar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    NavBar: _components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/izitoast/dist/css/iziToast.min.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/izitoast/dist/css/iziToast.min.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n* iziToast | v1.4.0\r\n* http://izitoast.marcelodolce.com\r\n* by Marcelo Dolce.\r\n*/\r\n.iziToast-capsule{font-size:0;height:0;width:100%;transform:translateZ(0);backface-visibility:hidden;transition:transform .5s cubic-bezier(.25,.8,.25,1),height .5s cubic-bezier(.25,.8,.25,1)}.iziToast-capsule,.iziToast-capsule *{box-sizing:border-box}.iziToast-overlay{display:block;position:fixed;top:-100px;left:0;right:0;bottom:-100px;z-index:997}.iziToast{display:inline-block;clear:both;position:relative;font-family:'Lato',Tahoma,Arial;font-size:14px;padding:8px 45px 9px 0;background:rgba(238,238,238,.9);border-color:rgba(238,238,238,.9);width:100%;pointer-events:all;cursor:default;transform:translateX(0);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-height:54px}.iziToast>.iziToast-progressbar{position:absolute;left:0;bottom:0;width:100%;z-index:1;background:rgba(255,255,255,.2)}.iziToast>.iziToast-progressbar>div{height:2px;width:100%;background:rgba(0,0,0,.3);border-radius:0 0 3px 3px}.iziToast.iziToast-balloon:before{content:'';position:absolute;right:8px;left:auto;width:0;height:0;top:100%;border-right:0 solid transparent;border-left:15px solid transparent;border-top:10px solid #000;border-top-color:inherit;border-radius:0}.iziToast.iziToast-balloon .iziToast-progressbar{top:0;bottom:auto}.iziToast.iziToast-balloon>div{border-radius:0 0 0 3px}.iziToast>.iziToast-cover{position:absolute;left:0;top:0;bottom:0;height:100%;margin:0;background-size:100%;background-position:50% 50%;background-repeat:no-repeat;background-color:rgba(0,0,0,.1)}.iziToast>.iziToast-close{position:absolute;right:0;top:0;border:0;padding:0;opacity:.6;width:42px;height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAJPAAACTwBcGfW0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD3SURBVFiF1ZdtDoMgDEBfdi4PwAX8vLFn0qT7wxantojKupmQmCi8R4tSACpgjC2ICCUbEBa8ingjsU1AXRBeR8aLN64FiknswN8CYefBBDQ3whuFESy7WyQMeC0ipEI0A+0FeBvHUFN8xPaUhAH/iKoWsnXHGegy4J0yxialOfaHJAz4bhRzQzgDvdGnz4GbAonZbCQMuBm1K/kcFu8Mp1N2cFFpsxsMuJqqbIGExGl4loARajU1twskJLLhIsID7+tvUoDnIjTg5T9DPH9EBrz8rxjPzciAl9+O8SxI8CzJ8CxKFfh3ynK8Dyb8wNHM/XDqejx/AtNyPO87tNybAAAAAElFTkSuQmCC) no-repeat 50% 50%;background-size:8px;cursor:pointer;outline:0}.iziToast>.iziToast-close:hover{opacity:1}.iziToast>.iziToast-body{position:relative;padding:0 0 0 10px;height:auto;min-height:36px;margin:0 0 0 15px;text-align:left}.iziToast>.iziToast-body:after{content:\"\";display:table;clear:both}.iziToast>.iziToast-body .iziToast-texts{margin:10px 0 0;padding-right:2px;display:inline-block;float:left}.iziToast>.iziToast-body .iziToast-inputs{min-height:19px;float:left;margin:3px -2px}.iziToast>.iziToast-body .iziToast-inputs>input:not([type=checkbox]):not([type=radio]),.iziToast>.iziToast-body .iziToast-inputs>select{position:relative;display:inline-block;margin:2px;border-radius:2px;border:0;padding:4px 7px;font-size:13px;letter-spacing:.02em;background:rgba(0,0,0,.1);color:#000;box-shadow:0 0 0 1px rgba(0,0,0,.2);min-height:26px}.iziToast>.iziToast-body .iziToast-inputs>input:not([type=checkbox]):not([type=radio]):focus,.iziToast>.iziToast-body .iziToast-inputs>select:focus{box-shadow:0 0 0 1px rgba(0,0,0,.6)}.iziToast>.iziToast-body .iziToast-buttons{min-height:17px;float:left;margin:4px -2px}.iziToast>.iziToast-body .iziToast-buttons>a,.iziToast>.iziToast-body .iziToast-buttons>button,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]){position:relative;display:inline-block;margin:2px;border-radius:2px;border:0;padding:5px 10px;font-size:12px;letter-spacing:.02em;cursor:pointer;background:rgba(0,0,0,.1);color:#000}.iziToast>.iziToast-body .iziToast-buttons>a:hover,.iziToast>.iziToast-body .iziToast-buttons>button:hover,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]):hover{background:rgba(0,0,0,.2)}.iziToast>.iziToast-body .iziToast-buttons>a:focus,.iziToast>.iziToast-body .iziToast-buttons>button:focus,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]):focus{box-shadow:0 0 0 1px rgba(0,0,0,.6)}.iziToast>.iziToast-body .iziToast-buttons>a:active,.iziToast>.iziToast-body .iziToast-buttons>button:active,.iziToast>.iziToast-body .iziToast-buttons>input:not([type=checkbox]):not([type=radio]):active{top:1px}.iziToast>.iziToast-body .iziToast-icon{position:absolute;left:0;top:50%;display:table;font-size:23px;line-height:24px;margin-top:-12px;color:#000;width:24px;height:24px}.iziToast>.iziToast-body .iziToast-icon.ico-info{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA6PsIvDob+OapavVhWRYPrIry2MxGQ97czsOzpJaMcE0qJQOwVtKjfxCVFeIAAAI3SURBVFjDlJPZsoIwEETnCiGyb8q+qmjl/3/wFmGKwjBROS9QWbtnOqDDGPq4MdMkSc0m7gcDDhF4NRdv8NoL4EcMpzoJglPl/KTDz4WW3IdvXEvxkfIKn7BMZb1bFK4yZFqghZ03jk0nG8N5NBwzx9xU5cxAg8fXi20/hDdC316lcA8o7t16eRuQvW1XGd2d2P8QSHQDDbdIII/9CR3lUF+lbucfJy4WfMS64EJPORnrZxtfc2pjJdnbuags3l04TTtJMXrdTph4Pyg4XAjugAJqMDf5Rf+oXx2/qi4u6nipakIi7CsgiuMSEF9IGKg8heQJKkxIfFSUU/egWSwNrS1fPDtLfon8sZOcYUQml1Qv9a3kfwsEUyJEMgFBKzdV8o3Iw9yAjg1jdLQCV4qbd3no8yD2GugaC3oMbF0NYHCpJYSDhNI5N2DAWB4F4z9Aj/04Cna/x7eVAQ17vRjQZPh+G/kddYv0h49yY4NWNDWMMOMUIRYvlTECmrN8pUAjo5RCMn8KoPmbJ/+Appgnk//Sy90GYBCGgm7IAskQ7D9hFKW4ApB1ei3FSYD9PjGAKygAV+ARFYBH5BsVgG9kkBSAQWKUFYBRZpkUgGVinRWAdUZQDABBQdIcAElDVBUAUUXWHQBZx1gMAGMprM0AsLbVXHsA5trZe93/wp3svQ0YNb/jWV3AIOLsMtlznSNOH7JqjOpDVh7z8qCZR10ftvO4nxeOvPLkpSuvfXnxzKtvXr7j+v8C5ii0e71At7cAAAAASUVORK5CYII=) no-repeat 50% 50%;background-size:85%}.iziToast>.iziToast-body .iziToast-icon.ico-warning{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAkFBMVEUAAAAAAAABAAIAAAABAAIAAAMAAAABAAIBAAIBAAIAAAIAAAABAAIAAAABAAICAAICAAIAAAIAAAAAAAAAAAABAAIBAAIAAAMAAAABAAIBAAMBAAECAAIAAAIAAAIAAAABAAIBAAIBAAMBAAIBAAEAAAIAAAMAAAAAAAABAAECAAICAAIAAAIAAAMAAAQAAAE05yNAAAAAL3RSTlMAB+kD7V8Q+PXicwv7I9iYhkAzJxnx01IV5cmnk2xmHfzexsK4eEw5L7Gei39aRw640awAAAHQSURBVFjD7ZfJdoJAEEWJgCiI4oDiPM8m7///LidErRO7sHrY5u7YXLr7vKqu9kTC0HPmo9n8cJbEQOzqqAdAUHeUZACQuTkGDQBoDJwkHZR0XBz9FkpafXuHP0SJ09mGeJLZ5wwlTmcbA0THPmdEK7XPGTG1zxmInn3OiJ19zkB0jSVTKExMHT0wjAwlWzC0fSPHF1gWRpIhWMYm7fYTFcQGlbemf4dFfdTGg0B/KXM8qBU/3wntbq7rSGqvJ9kla6IpueFJet8fxfem5yhykjyOgNaWF1qSGd5JMNNxpNF7SZQaVh5JzLrTCZIEJ1GyEyVyd+pClMjdaSJK5O40giSRu5PfFiVyd1pAksjdKRnrSsbVdbiHrgT7yss315fkVQPLFQrL+4FHeOXKO5YRFEKv5AiFaMlKLlBpJuVCJlC5sJfvCgztru/3NmBYccPgGTxRAzxn1XGEMUf58pXZvjoOsOCgjL08+b53mtfAM/SVsZcjKLtysQZPqIy9HPP3m/3zKItRwT0LyQo8sTr26tcO83DIUMWIJjierHLsJda/tbNBFY0BP/bKtcM8HNIWCK3aYR4OMzgxo5w5EFLOLKDExXAm9gI4E3iAO94/Ct/lKWuM2LMGbgAAAABJRU5ErkJggg==) no-repeat 50% 50%;background-size:85%}.iziToast>.iziToast-body .iziToast-icon.ico-error{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAeFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVyEiIAAAAJ3RSTlMA3BsB98QV8uSyWVUFz7+kcWMM2LuZioBpTUVBNcq2qaibj4d1azLZZYABAAACZElEQVRYw7WX25KCMAyGAxUoFDkpiohnV97/DXeGBtoOUprZ2dyo1K82fxKbwJJVp+KQZ7so2mX5oThVQLKwjDe9YZu4DF3ptAn6rxY0qQPOEq9fNC9ha3y77a22ba24v+9Xbe8v8x03dPOC2/NdvB6xeSreLfGJpnx0TyotKqLm2s7Jd/WO6ivXNp0tCy02R/aFz5VQ5wUPlUL5fIfj5KIlVGU0nWHm/5QtoTVMWY8mzIVu1K9O7XH2JiU/xnOOT39gnUfj+lFHddx4tFjL3/H8jjzaFCy2Rf0c/fdQyQszI8BDR973IyMSKa4krjxAiW/lkRvMP+bKK9WbYS1ASQg8dKjaUGlYPwRe/WoIkz8tiQchH5QAEMv6T0k8MD4mUyWr4E7jAWqZ+xWcMIYkXvlwggJ3IvFK+wIOcpXAo8n8P0COAaXyKH4OsjBuZB4ew0IGu+H1SebhNazsQBbWm8yj+hFuUJB5eMsN0IUXmYendAFFfJB5uEkRMYwxmcd6zDGRtmQePEykAgubymMRFmMxCSIPCRbTuFNN5OGORTjmNGc0Po0m8Uv0gcCry6xUhR2QeLii9tofbEfhz/qvNti+OfPqNm2Mq6105FUMvdT4GPmufMiV8PqBMkc+DdT1bjYYbjzU/ew23VP4n3mLAz4n8Jtv/Ui3ceTT2mzz5o1mZt0gnBpmsdjqRqVlmplcPdqa7X23kL9brdm2t/uBYDPn2+tyu48mtIGD10JTuUrukVrbCFiwDzcHrPjxKt7PW+AZQyT/WESO+1WL7f3o+WLHL2dYMSZsg6dg/z360ofvP4//v1NPzgs28WlWAAAAAElFTkSuQmCC) no-repeat 50% 50%;background-size:80%}.iziToast>.iziToast-body .iziToast-icon.ico-success{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAACnRSTlMApAPhIFn82wgGv8mVtwAAAKVJREFUSMft0LEJAkEARNFFFEw1NFJb8CKjAy1AEOzAxNw+bEEEg6nyFjbY4LOzcBwX7S/gwUxoTdIn+Jbv4Lv8bx446+kB6VsBtK0B+wbMCKxrwL33wOrVeeChX28n7KTOTjgoEu6DRSYAgAAAAkAmAIAAAAIACQIkMkACAAgAIACAyECBKAOJuCagTJwSUCaUAEMAABEBRwAAEQFLbCJgO4bW+AZKGnktR+jAFAAAAABJRU5ErkJggg==) no-repeat 50% 50%;background-size:85%}.iziToast>.iziToast-body .iziToast-icon.ico-question{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhCQkUEhFovxTxAAAEDklEQVRo3s2ZTWgTQRTHf03ipTRUqghNSgsRjHgQrFUQC6JgD1Kak3gQUUoPqRdBglf1oBehBws9Cn4cGk+1SOmh2upBxAYVoeJHrR9tgq0i1Cq0lqYeks7MbpPdmU00/c8hm9n33v/t7Nt5M2+qMEWQI0QIibZKRrQpHvLL2KI2wnQzzBKrDm2RIeKEy01dTYKUI7G1ZRknQXV5yP10kTYgly1NF/5S6duZ8ES+1iZodyaocrjXxE0OFeifYYgp0mRIkwFChAkRJsIxGgrIP+I0n82fvZW5dc/zkss0O2o1c5mX6/TmaDWl77RFe5YkUW3tKEmyFv0lOvXJ/fTYnmCEFuMRbGHEZqVHLyT9DFjUJmkzJl9DG5MWWwM6Llif/gF1nukB6nhgGwUXdFrE+wiURA8QoM9i0zEWWpXQW+ZsyeRrOMuyEo5Fv4gmy4dXPvqcC+pH2VRYaMwy+OWG+iLGCgm0W0Kv9HdvR8ASjmKCXpuK/bxiV/76A/v5UdDIZuKcJGjrnec5KZ7wwsWFOp6xPX/9mt2sqDe7FO+Kf/fXHBPPDWpdXGhTpLvUG9VKwh1xMDDjkvu+cNDFBTk7ptX1QkKZ850m3duu6fcrWxwdaFFyREJ2j4vOpKP6Du6z4uJCv8sYJIVkCnJBGGZaBONO3roY2EqNrSfIPi7SKP4fdXyNUd6I6wbSAHEl33tFLe+FlSsusnK90A0+oEPcuufZgXnOi+u9LrKSJQZQw6LwqBnv2CKsfHORbFbyQhA6xN/pEuihSdj56Co7LWRjPiKie6gkB2LiKuUqK5kiPkLiz1QJ9K1cNXBAMoUCigNpQ9IqDtMI1HKA4/jyvUsaoSyZLA5kjOjDPFZen8Ql5TsvBskUgjciIPSX3QAXC86DT7VWvlEh/xZ+ij9BDVWJ0QL0SbZq6QaFxoLPcXPmBLveLCc4wXdDK6s+6/vwhCSniFLPXW0NJe5UB8zKCsviqpc7vGPVQFcyZbyPwGD+d5ZnxmNWlhG4xSBZZjivjIWHEQgoDkSMjMwTo54569JSE5IpA7EyJSMTyGTUAUFlO1ZKOtaHTMeL1PhYYFTcihmY2cQ5+ullj7EDkiVfVez2sCTz8yiv84djhg7IJVk81xFWJlPdfHBG0flkRC/zQFZ+DSllNtfDdUsOMCliyGX5uOzU3ZhIXFDof4m1gDuKbEx0t2YS25gVGpcMnr/I1kx3c6piB8P8ZoqEwfMX3ZyCXynJTmq/U7NUXqfUzCbWL1wqVKBQUeESzQYoUlW8TAcVL1RCxUu1G6BYXfFyfQ4VPbDI4T8d2WzgQ6sc/vmxnTsqfHCZQzUJxm1h5dxS5Tu6lQgTZ0ipqRVqSwzTbbLHMt+c19iO76tsx/cLZub+Ali+tYC93olEAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA5LTA5VDIwOjE4OjE3KzAyOjAwjKtfjgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOS0wOVQyMDoxODoxNyswMjowMP325zIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) no-repeat 50% 50%;background-size:85%}.iziToast>.iziToast-body .iziToast-message,.iziToast>.iziToast-body .iziToast-title{padding:0;font-size:14px;line-height:16px;text-align:left;float:left;white-space:normal}.iziToast>.iziToast-body .iziToast-title{color:#000;margin:0}.iziToast>.iziToast-body .iziToast-message{margin:0 0 10px;color:rgba(0,0,0,.6)}.iziToast.iziToast-animateInside .iziToast-buttons-child,.iziToast.iziToast-animateInside .iziToast-icon,.iziToast.iziToast-animateInside .iziToast-inputs-child,.iziToast.iziToast-animateInside .iziToast-message,.iziToast.iziToast-animateInside .iziToast-title{opacity:0}.iziToast-target{position:relative;width:100%;margin:0 auto}.iziToast-target .iziToast-capsule{overflow:hidden}.iziToast-target .iziToast-capsule:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}.iziToast-target .iziToast-capsule .iziToast{width:100%;float:left}.iziToast-wrapper{z-index:99999;position:fixed;width:100%;pointer-events:none;display:flex;flex-direction:column}.iziToast-wrapper .iziToast.iziToast-balloon:before{border-right:0 solid transparent;border-left:15px solid transparent;border-top:10px solid #000;border-top-color:inherit;right:8px;left:auto}.iziToast-wrapper-bottomLeft{left:0;bottom:0;text-align:left}.iziToast-wrapper-bottomLeft .iziToast.iziToast-balloon:before,.iziToast-wrapper-topLeft .iziToast.iziToast-balloon:before{border-right:15px solid transparent;border-left:0 solid transparent;right:auto;left:8px}.iziToast-wrapper-bottomRight{right:0;bottom:0;text-align:right}.iziToast-wrapper-topLeft{left:0;top:0;text-align:left}.iziToast-wrapper-topRight{top:0;right:0;text-align:right}.iziToast-wrapper-topCenter{top:0;left:0;right:0;text-align:center}.iziToast-wrapper-bottomCenter,.iziToast-wrapper-center{bottom:0;left:0;right:0;text-align:center}.iziToast-wrapper-center{top:0;justify-content:center;flex-flow:column;align-items:center}.iziToast-rtl{direction:rtl;padding:8px 0 9px 45px;font-family:Tahoma,'Lato',Arial}.iziToast-rtl .iziToast-cover{left:auto;right:0}.iziToast-rtl .iziToast-close{right:auto;left:0}.iziToast-rtl .iziToast-body{padding:0 10px 0 0;margin:0 16px 0 0;text-align:right}.iziToast-rtl .iziToast-body .iziToast-buttons,.iziToast-rtl .iziToast-body .iziToast-inputs,.iziToast-rtl .iziToast-body .iziToast-message,.iziToast-rtl .iziToast-body .iziToast-texts,.iziToast-rtl .iziToast-body .iziToast-title{float:right;text-align:right}.iziToast-rtl .iziToast-body .iziToast-icon{left:auto;right:0}@media only screen and (min-width:568px){.iziToast-wrapper{padding:10px 15px}.iziToast{margin:5px 0;border-radius:3px;width:auto}.iziToast:after{content:'';z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:3px;box-shadow:inset 0 -10px 20px -10px rgba(0,0,0,.2),inset 0 0 5px rgba(0,0,0,.1),0 8px 8px -5px rgba(0,0,0,.25)}.iziToast:not(.iziToast-rtl) .iziToast-cover{border-radius:3px 0 0 3px}.iziToast.iziToast-rtl .iziToast-cover{border-radius:0 3px 3px 0}.iziToast.iziToast-color-dark:after{box-shadow:inset 0 -10px 20px -10px rgba(255,255,255,.3),0 10px 10px -5px rgba(0,0,0,.25)}.iziToast.iziToast-balloon .iziToast-progressbar{background:0 0}.iziToast.iziToast-balloon:after{box-shadow:0 10px 10px -5px rgba(0,0,0,.25),inset 0 10px 20px -5px rgba(0,0,0,.25)}.iziToast-target .iziToast:after{box-shadow:inset 0 -10px 20px -10px rgba(0,0,0,.2),inset 0 0 5px rgba(0,0,0,.1)}}.iziToast.iziToast-theme-dark{background:#565c70;border-color:#565c70}.iziToast.iziToast-theme-dark .iziToast-title{color:#fff}.iziToast.iziToast-theme-dark .iziToast-message{color:rgba(255,255,255,.7);font-weight:300}.iziToast.iziToast-theme-dark .iziToast-close{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgCR4OIQIPSao6AAAAwElEQVRIx72VUQ6EIAwFmz2XB+AConhjzqTJ7JeGKhLYlyx/BGdoBVpjIpMJNjgIZDKTkQHYmYfwmR2AfAqGFBcO2QjXZCd24bEggvd1KBx+xlwoDpYmvnBUUy68DYXD77ESr8WDtYqvxRex7a8oHP4Wo1Mkt5I68Mc+qYqv1h5OsZmZsQ3gj/02h6cO/KEYx29hu3R+VTTwz6D3TymIP1E8RvEiiVdZfEzicxYLiljSxKIqlnW5seitTW6uYnv/Aqh4whX3mEUrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA5LTMwVDE0OjMzOjAyKzAyOjAwl6RMVgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wOS0zMFQxNDozMzowMiswMjowMOb59OoAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) no-repeat 50% 50%;background-size:8px}.iziToast.iziToast-theme-dark .iziToast-icon{color:#fff}.iziToast.iziToast-theme-dark .iziToast-icon.ico-info{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAflBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vroaSAAAAKXRSTlMA6PsIvDob+OapavVhWRYPrIry2MxGQ97czsOzpJaMcE0qJQOwVtKjfxCVFeIAAAI3SURBVFjDlJPZsoIwEETnCiGyb8q+qmjl/3/wFmGKwjBROS9QWbtnOqDDGPq4MdMkSc0m7gcDDhF4NRdv8NoL4EcMpzoJglPl/KTDz4WW3IdvXEvxkfIKn7BMZb1bFK4yZFqghZ03jk0nG8N5NBwzx9xU5cxAg8fXi20/hDdC316lcA8o7t16eRuQvW1XGd2d2P8QSHQDDbdIII/9CR3lUF+lbucfJy4WfMS64EJPORnrZxtfc2pjJdnbuags3l04TTtJMXrdTph4Pyg4XAjugAJqMDf5Rf+oXx2/qi4u6nipakIi7CsgiuMSEF9IGKg8heQJKkxIfFSUU/egWSwNrS1fPDtLfon8sZOcYUQml1Qv9a3kfwsEUyJEMgFBKzdV8o3Iw9yAjg1jdLQCV4qbd3no8yD2GugaC3oMbF0NYHCpJYSDhNI5N2DAWB4F4z9Aj/04Cna/x7eVAQ17vRjQZPh+G/kddYv0h49yY4NWNDWMMOMUIRYvlTECmrN8pUAjo5RCMn8KoPmbJ/+Appgnk//Sy90GYBCGgm7IAskQ7D9hFKW4ApB1ei3FSYD9PjGAKygAV+ARFYBH5BsVgG9kkBSAQWKUFYBRZpkUgGVinRWAdUZQDABBQdIcAElDVBUAUUXWHQBZx1gMAGMprM0AsLbVXHsA5trZe93/wp3svQ0YNb/jWV3AIOLsMtlznSNOH7JqjOpDVh7z8qCZR10ftvO4nxeOvPLkpSuvfXnxzKtvXr7j+v8C5ii0e71At7cAAAAASUVORK5CYII=) no-repeat 50% 50%;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-warning{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAllBMVEUAAAD////+//3+//3+//3///////z+//3+//3+//3////////////9//3////+//39//3///3////////////+//3+//39//3///z+//z+//7///3///3///3///3////////+//3+//3+//3+//z+//3+//7///3///z////////+//79//3///3///z///v+//3///+trXouAAAAMHRSTlMAB+j87RBf+PXiCwQClSPYhkAzJxnx05tSyadzcmxmHRbp5d7Gwrh4TDkvsYt/WkdQzCITAAAB1UlEQVRYw+3XaXKCQBCGYSIIighoxCVqNJrEPfly/8vFImKXduNsf/Mc4K1y7FnwlMLQc/bUbj85R6bA1LXRDICg6RjJcZa7NQYtnLUGTpERSiOXxrOPkv9s30iGKDmtbYir3H7OUHJa2ylAuvZzRvzUfs7Ii/2cgfTt54x82s8ZSM848gJmYtroQzA2jHwA+LkBIEuMGt+QIng1igzlyMrkuP2CyOi47axRaYTL5jhDJehoR+aovC29s3iIyly3Eb+hRCvZo2qsGTnhKr2cLDS+J73GsqBI9W80UCmWWpEuhIjh6ZRGjyNRarjzKGJ2Ou2himCvjHwqI+rTqQdlRH06TZQR9ek0hiqiPp06mV4ke7QPX6ERUZxO8Uo3sqrfhxvoRrCpvXwL/UjR9GRHMIvLgke4d5QbiwhM6JV2YKKF4vIl7XIBkwm4keryJVmvk/TfwcmPwQNkUQuyA2/sYGwnXL7GPu4bW1jYsmevrNj09/MGZMOEPXslQVqO8hqykD17JfPHP/bmo2yGGpdZiH3IZvzZa7B3+IdDjjpjesHJcvbs5dZ/e+cddVoDdvlq7x12Nac+iN7e4R8OXTjp0pw5CGnOLNDEzeBs5gVwFniAO+8f8wvfeXP2hyqnmwAAAABJRU5ErkJggg==) no-repeat 50% 50%;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-error{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAeFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////GqOSsAAAAJ3RSTlMA3BsB98QV8uSyWVUFz6RxYwzYvbupmYqAaU1FQTXKv7abj4d1azKNUit3AAACZElEQVRYw7WXaZOCMAyGw30UORRQBLxX/v8/3BkaWjrY2szO5otKfGrzJrEp6Kw6F8f8sI+i/SE/FucKSBaWiT8p5idlaEtnXTB9tKDLLHAvdSatOan3je93k9F2vRF36+mr1a6eH2NFNydoHq/ieU/UXcWjjk9XykdNWq2ywtp4tXL6Wb2T/MqtzzZutsrNyfvA51KoQROhVCjfrnASIRpSVUZiD5v4RbWExjRdJzSmOsZFvzYz59kRSr6V5zE+/QELHkNdb3VRx45HS1b1u+zfkkcbRAZ3qJ9l/A4qefHUDMShJe+6kZKJDD2pLQ9Q4lu+5Q7rz7Plperd7AtQEgIPI6o2dxr2D4GXvxqCiKcn8cD4gxIAEt7/GYkHL16KqeJd0NB4gJbXfgVnzCGJlzGcocCVSLzUvoAj9xJ4NF7/R8gxoVQexc/hgBpSebjPjgPs59cHmYfn7NkDb6wXmUf1I1ygIPPw4gtgCE8yDw8eAop4J/PQcBExjQmZx37MsZB2ZB4cLKQCG5vKYxMWSzMxIg8pNtOyUkvkocEmXGo69mh8FgnxS4yBwMvDrJSNHZB4uC3ayz/YkcIP4lflwVIT+OU07ZSjrbTkZQ6dTPkYubZ8GC/Cqxu6WvJZII93dcCw46GdNqdpTeF/tiMOuDGB9z/NI6NvyWetGPM0g+bVNeovBmamHXWj0nCbEaGeTMN2PWrqd6cM26ZxP2DeJvj+ph/30Zi/GmRbtlK5SptI+nwGGnvH6gUruT+L16MJHF+58rwNIifTV0vM8+hwMeOXAb6Yx0wXT+b999WXfvn+8/X/F7fWzjdTord5AAAAAElFTkSuQmCC) no-repeat 50% 50%;background-size:80%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-success{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMApAPhIFn82wgGv8mVtwAAAKVJREFUSMft0LEJAkEARNFFFEw1NFJb8CKjAy1AEOzAxNw+bEEEg6nyFjbY4LOzcBwX7S/gwUxoTdIn+Jbv4Lv8bx446+kB6VsBtK0B+wbMCKxrwL33wOrVeeChX28n7KTOTjgoEu6DRSYAgAAAAkAmAIAAAAIACQIkMkACAAgAIACAyECBKAOJuCagTJwSUCaUAEMAABEBRwAAEQFLbCJgO4bW+AZKGnktR+jAFAAAAABJRU5ErkJggg==) no-repeat 50% 50%;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-icon.ico-question{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhCQkUEg18vki+AAAETUlEQVRo3s1ZTWhbRxD+VlIuxsLFCYVIIQYVopBDoK5bKDWUBupDMNbJ5FBKg/FBziUQdE9yaC+FHBrwsdCfQ9RTGoLxwWl+DqHEojUFFydxnB9bInZDqOsErBrr6yGvs/ueX97bldTKo4Pe7puZb3Z33s7srIIjMY1jyCEjP6ImvyX8pF64arSHznKC06wzijY5xSKz7YbuYokV2lODsyyxqz3gSY6z6gCuqcpxJluFH+Z8U+D/0jyHoxFUBHgfvsGHIS9WMIUlVFFDFTUAGWSRQRY5HMeBEP6b+Ew9dh/7INd2jGeO59kfKdXP85zbIbfGQVf4sYC3N1hm3lo6zzIbPvk6x+zBk7wQGMEMB5xncIAzAS0XrFySSV72iS1yyBVcdA1x0afrsoUJgdFfY2+z8ADAXl7zz0KcwJiPfZKpVuABgClO+nRG+QIHDdfb4qlWwUXvKW4Z7vi6L4J9vg+vbfCeCeZH2RfOdMOc/HbCA4BvIW6EMQz7XK/ltd+hP+VzR9mgva2YSfyGI17fA7ynnocqeQNFfIJ0oHsdv6CC2+rXGBN6cQdveY3fcVRtmy/HDete+93zy8jA8zV7YkwYMrjHzRddRsCdiVCwwmh6wg9iTNC7Y9XIF1iS7kbUpsvvGEdPuTfSgAEjRpR096x0liPFD/Eqt2NMuBQzB2XhrACAApjFsuQFh9XdGAX70B3oSuNdnMVBaX+sopYxjwVpHFBVACyKTXNoktjD+6Ll8xhenS9MAAkAI/Lux2YNUOs4I413Ypg1SgEAu7kpFvWjaeJe0fJHDGe/cNaZBkekudw8PMA+0fMwlndZeAsJ5KR/qhUDUJCnSiyvRsolkJHGUgvjH8QXDgZopEzKMKDqCKrwEQ4C6MH7GEXC665buLJG8hlQc4LP4paxfJrOqYVYYY2UARfEIazTbgDg2dB98GebzJd54b8L/iWNdLyooeR6CHyZ+6xk0yKxkYg6nEVSUG4VJ9QJ9cxRCxO+9WiOyvgUeexXP1hLGH5nGuBWVtiSp4vqe3VP0UFWI9Wan4Er3v8q7jjPWVtm4FtcQQMrOKO2nOQCM5AyDMi56FDrKHA/1nyppS1ppBpYaE8wciEjGI2AaeM41kI4doDX4XiT3Qm1gevyruCgZg9P8xIv8m1nCzTKq6oiJ9xTMiZ505P5m8cdZ0CnZMVXHVljM7WMBzxpyDxygtdxoCEFTaMIWbZU85UvBjgUMYy0fBaAF8V1Lj9qWQ1aMZ5f4k9r+AGMSkMP1vZoZih6k6sicc5h/OFHM9vDqU/VIU7zJZdYYsKGH4g4nAJMGiXZRds1pVMoZ69RM5vfkbh0qkBhsnS2RLMLilQdL9MBHS9UAh0v1e6CYnXHy/WeeCcvLDwl/9OVze69tPKM+M+v7eJN6OzFpWdEF0ucDbhVNFXadnVrmJFlkVNGTS2M6pzmhMvltfPhnN2B63sVuL7fcNP3D1TSk2ihosPrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA5LTA5VDIwOjE4OjEzKzAyOjAweOR7nQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOS0wOVQyMDoxODoxMyswMjowMAm5wyEAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) no-repeat 50% 50%;background-size:85%}.iziToast.iziToast-theme-dark .iziToast-buttons>a,.iziToast.iziToast-theme-dark .iziToast-buttons>button,.iziToast.iziToast-theme-dark .iziToast-buttons>input{color:#fff;background:rgba(255,255,255,.1)}.iziToast.iziToast-theme-dark .iziToast-buttons>a:hover,.iziToast.iziToast-theme-dark .iziToast-buttons>button:hover,.iziToast.iziToast-theme-dark .iziToast-buttons>input:hover{background:rgba(255,255,255,.2)}.iziToast.iziToast-theme-dark .iziToast-buttons>a:focus,.iziToast.iziToast-theme-dark .iziToast-buttons>button:focus,.iziToast.iziToast-theme-dark .iziToast-buttons>input:focus{box-shadow:0 0 0 1px rgba(255,255,255,.6)}.iziToast.iziToast-color-red{background:rgba(255,175,180,.9);border-color:rgba(255,175,180,.9)}.iziToast.iziToast-color-orange{background:rgba(255,207,165,.9);border-color:rgba(255,207,165,.9)}.iziToast.iziToast-color-yellow{background:rgba(255,249,178,.9);border-color:rgba(255,249,178,.9)}.iziToast.iziToast-color-blue{background:rgba(157,222,255,.9);border-color:rgba(157,222,255,.9)}.iziToast.iziToast-color-green{background:rgba(166,239,184,.9);border-color:rgba(166,239,184,.9)}.iziToast.iziToast-layout2 .iziToast-body .iziToast-message,.iziToast.iziToast-layout2 .iziToast-body .iziToast-texts{width:100%}.iziToast.iziToast-layout3{border-radius:2px}.iziToast.iziToast-layout3::after{display:none}.iziToast .revealIn,.iziToast.revealIn{-webkit-animation:iziT-revealIn 1s cubic-bezier(.25,1.6,.25,1) both;-moz-animation:iziT-revealIn 1s cubic-bezier(.25,1.6,.25,1) both;animation:iziT-revealIn 1s cubic-bezier(.25,1.6,.25,1) both}.iziToast .slideIn,.iziToast.slideIn{-webkit-animation:iziT-slideIn 1s cubic-bezier(.16,.81,.32,1) both;-moz-animation:iziT-slideIn 1s cubic-bezier(.16,.81,.32,1) both;animation:iziT-slideIn 1s cubic-bezier(.16,.81,.32,1) both}.iziToast.bounceInLeft{-webkit-animation:iziT-bounceInLeft .7s ease-in-out both;animation:iziT-bounceInLeft .7s ease-in-out both}.iziToast.bounceInRight{-webkit-animation:iziT-bounceInRight .85s ease-in-out both;animation:iziT-bounceInRight .85s ease-in-out both}.iziToast.bounceInDown{-webkit-animation:iziT-bounceInDown .7s ease-in-out both;animation:iziT-bounceInDown .7s ease-in-out both}.iziToast.bounceInUp{-webkit-animation:iziT-bounceInUp .7s ease-in-out both;animation:iziT-bounceInUp .7s ease-in-out both}.iziToast .fadeIn,.iziToast.fadeIn{-webkit-animation:iziT-fadeIn .5s ease both;animation:iziT-fadeIn .5s ease both}.iziToast.fadeInUp{-webkit-animation:iziT-fadeInUp .7s ease both;animation:iziT-fadeInUp .7s ease both}.iziToast.fadeInDown{-webkit-animation:iziT-fadeInDown .7s ease both;animation:iziT-fadeInDown .7s ease both}.iziToast.fadeInLeft{-webkit-animation:iziT-fadeInLeft .85s cubic-bezier(.25,.8,.25,1) both;animation:iziT-fadeInLeft .85s cubic-bezier(.25,.8,.25,1) both}.iziToast.fadeInRight{-webkit-animation:iziT-fadeInRight .85s cubic-bezier(.25,.8,.25,1) both;animation:iziT-fadeInRight .85s cubic-bezier(.25,.8,.25,1) both}.iziToast.flipInX{-webkit-animation:iziT-flipInX .85s cubic-bezier(.35,0,.25,1) both;animation:iziT-flipInX .85s cubic-bezier(.35,0,.25,1) both}.iziToast.fadeOut{-webkit-animation:iziT-fadeOut .7s ease both;animation:iziT-fadeOut .7s ease both}.iziToast.fadeOutDown{-webkit-animation:iziT-fadeOutDown .7s cubic-bezier(.4,.45,.15,.91) both;animation:iziT-fadeOutDown .7s cubic-bezier(.4,.45,.15,.91) both}.iziToast.fadeOutUp{-webkit-animation:iziT-fadeOutUp .7s cubic-bezier(.4,.45,.15,.91) both;animation:iziT-fadeOutUp .7s cubic-bezier(.4,.45,.15,.91) both}.iziToast.fadeOutLeft{-webkit-animation:iziT-fadeOutLeft .5s ease both;animation:iziT-fadeOutLeft .5s ease both}.iziToast.fadeOutRight{-webkit-animation:iziT-fadeOutRight .5s ease both;animation:iziT-fadeOutRight .5s ease both}.iziToast.flipOutX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation:iziT-flipOutX .7s cubic-bezier(.4,.45,.15,.91) both;animation:iziT-flipOutX .7s cubic-bezier(.4,.45,.15,.91) both}.iziToast-overlay.fadeIn{-webkit-animation:iziT-fadeIn .5s ease both;animation:iziT-fadeIn .5s ease both}.iziToast-overlay.fadeOut{-webkit-animation:iziT-fadeOut .7s ease both;animation:iziT-fadeOut .7s ease both}@-webkit-keyframes iziT-revealIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,1)}to{opacity:1}}@-moz-keyframes iziT-revealIn{0%{opacity:0;-moz-transform:scale3d(.3,.3,1)}to{opacity:1}}@-webkit-keyframes iziT-slideIn{0%{opacity:0;-webkit-transform:translateX(50px)}to{opacity:1;-webkit-transform:translateX(0)}}@-moz-keyframes iziT-slideIn{0%{opacity:0;-moz-transform:translateX(50px)}to{opacity:1;-moz-transform:translateX(0)}}@-webkit-keyframes iziT-bounceInLeft{0%{opacity:0;-webkit-transform:translateX(280px)}50%{opacity:1;-webkit-transform:translateX(-20px)}70%{-webkit-transform:translateX(10px)}to{-webkit-transform:translateX(0)}}@-webkit-keyframes iziT-bounceInRight{0%{opacity:0;-webkit-transform:translateX(-280px)}50%{opacity:1;-webkit-transform:translateX(20px)}70%{-webkit-transform:translateX(-10px)}to{-webkit-transform:translateX(0)}}@-webkit-keyframes iziT-bounceInDown{0%{opacity:0;-webkit-transform:translateY(-200px)}50%{opacity:1;-webkit-transform:translateY(10px)}70%{-webkit-transform:translateY(-5px)}to{-webkit-transform:translateY(0)}}@-webkit-keyframes iziT-bounceInUp{0%{opacity:0;-webkit-transform:translateY(200px)}50%{opacity:1;-webkit-transform:translateY(-10px)}70%{-webkit-transform:translateY(5px)}to{-webkit-transform:translateY(0)}}@-webkit-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-webkit-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-webkit-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-moz-keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@-webkit-keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@-o-keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@keyframes iziT-revealIn{0%{opacity:0;transform:scale3d(.3,.3,1)}to{opacity:1}}@-moz-keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-o-keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@keyframes iziT-slideIn{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-moz-keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@-webkit-keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@-o-keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@keyframes iziT-bounceInLeft{0%{opacity:0;transform:translateX(280px)}50%{opacity:1;transform:translateX(-20px)}70%{transform:translateX(10px)}to{transform:translateX(0)}}@-moz-keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@-webkit-keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@-o-keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@keyframes iziT-bounceInRight{0%{opacity:0;transform:translateX(-280px)}50%{opacity:1;transform:translateX(20px)}70%{transform:translateX(-10px)}to{transform:translateX(0)}}@-moz-keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@-webkit-keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@-o-keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@keyframes iziT-bounceInDown{0%{opacity:0;transform:translateY(-200px)}50%{opacity:1;transform:translateY(10px)}70%{transform:translateY(-5px)}to{transform:translateY(0)}}@-moz-keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@-webkit-keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@-o-keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@keyframes iziT-bounceInUp{0%{opacity:0;transform:translateY(200px)}50%{opacity:1;transform:translateY(-10px)}70%{transform:translateY(5px)}to{transform:translateY(0)}}@-moz-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-o-keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes iziT-fadeIn{0%{opacity:0}to{opacity:1}}@-moz-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-o-keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes iziT-fadeInRight{0%{opacity:0;-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-moz-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-o-keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes iziT-flipInX{0%{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg)}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-moz-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-o-keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@keyframes iziT-fadeOut{0%{opacity:1}to{opacity:0}}@-moz-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-o-keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes iziT-fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-moz-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-o-keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes iziT-fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-moz-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-webkit-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-o-keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@keyframes iziT-fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}@-moz-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-webkit-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-o-keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@keyframes iziT-fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}@-moz-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-webkit-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-o-keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@keyframes iziT-flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-select/dist/vue-select.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-select/dist/vue-select.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{pointer-events:none;transition:opacity .15s cubic-bezier(1,.5,.8,1)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{cursor:not-allowed;background-color:#f8f8f8}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:4px 6px 0 3px}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);transform:scale(1);transition:transform .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.vs--open .vs__open-indicator{transform:rotate(180deg) scale(1)}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;box-sizing:border-box;position:absolute;top:calc(100% - 1px);left:0;z-index:1000;padding:5px 0;margin:0;width:100%;max-height:350px;min-width:160px;overflow-y:auto;box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border:1px solid rgba(60,60,60,.26);border-top-style:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.vs__dropdown-option:hover{cursor:pointer}.vs__dropdown-option--highlight{background:#5897fb;color:#fff}.vs__dropdown-option--disabled{background:inherit;color:rgba(60,60,60,.5)}.vs__dropdown-option--disabled:hover{cursor:inherit}.vs__selected{display:flex;align-items:center;background-color:#f0f0f0;border:1px solid rgba(60,60,60,.26);border-radius:4px;color:#333;line-height:1.4;margin:4px 2px 0;padding:0 .25em;z-index:0}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:rgba(60,60,60,.5);text-shadow:0 1px 0 #fff}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-webkit-search-cancel-button{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.4;font-size:1em;border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1;z-index:1}.vs__search::-webkit-input-placeholder{color:inherit}.vs__search::-moz-placeholder{color:inherit}.vs__search:-ms-input-placeholder{color:inherit}.vs__search::-ms-input-placeholder{color:inherit}.vs__search::placeholder{color:inherit}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable:not(.vs--disabled) .vs__search:hover{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border:.9em solid hsla(0,0%,39.2%,.1);border-left-color:rgba(60,60,60,.45);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em}.vs--loading .vs__spinner{opacity:1}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue2-datepicker/index.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue2-datepicker/index.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx-icon-left:before,.mx-icon-right:before,.mx-icon-double-left:before,.mx-icon-double-right:before,.mx-icon-double-left:after,.mx-icon-double-right:after{content:\"\";position:relative;top:-1px;display:inline-block;width:10px;height:10px;vertical-align:middle;border-style:solid;border-color:currentColor;border-width:2px 0 0 2px;border-radius:1px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-45deg) scale(0.7);transform:rotate(-45deg) scale(0.7)}.mx-icon-double-left:after{left:-4px}.mx-icon-double-right:before{left:4px}.mx-icon-right:before,.mx-icon-double-right:before,.mx-icon-double-right:after{-webkit-transform:rotate(135deg) scale(0.7);transform:rotate(135deg) scale(0.7)}.mx-btn{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1;font-size:14px;font-weight:500;padding:7px 15px;margin:0;cursor:pointer;background-color:transparent;outline:none;border:1px solid rgba(0,0,0,.1);border-radius:4px;color:#73879c;white-space:nowrap}.mx-btn:hover{border-color:#1284e7;color:#1284e7}.mx-btn-text{border:0;padding:0 4px;text-align:left;line-height:inherit}.mx-scrollbar{height:100%}.mx-scrollbar:hover .mx-scrollbar-track{opacity:1}.mx-scrollbar-wrap{height:100%;overflow-x:hidden;overflow-y:auto}.mx-scrollbar-track{position:absolute;top:2px;right:2px;bottom:2px;width:6px;z-index:1;border-radius:4px;opacity:0;-webkit-transition:opacity .24s ease-out;transition:opacity .24s ease-out}.mx-scrollbar-track .mx-scrollbar-thumb{position:absolute;width:100%;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(144,147,153,.3);-webkit-transition:background-color .3s;transition:background-color .3s}.mx-zoom-in-down-enter-active,.mx-zoom-in-down-leave-active{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1);-webkit-transition:opacity .3s cubic-bezier(0.23, 1, 0.32, 1),-webkit-transform .3s cubic-bezier(0.23, 1, 0.32, 1);transition:opacity .3s cubic-bezier(0.23, 1, 0.32, 1),-webkit-transform .3s cubic-bezier(0.23, 1, 0.32, 1);transition:transform .3s cubic-bezier(0.23, 1, 0.32, 1),opacity .3s cubic-bezier(0.23, 1, 0.32, 1);transition:transform .3s cubic-bezier(0.23, 1, 0.32, 1),opacity .3s cubic-bezier(0.23, 1, 0.32, 1),-webkit-transform .3s cubic-bezier(0.23, 1, 0.32, 1);-webkit-transform-origin:center top;transform-origin:center top}.mx-zoom-in-down-enter,.mx-zoom-in-down-leave-to{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}.mx-datepicker{position:relative;display:inline-block;width:210px}.mx-datepicker svg{width:1em;height:1em;vertical-align:-0.15em;fill:currentColor;overflow:hidden}.mx-datepicker-range{width:320px}.mx-datepicker-inline{width:auto}.mx-input-wrapper{position:relative}.mx-input-wrapper .mx-icon-clear{display:none}.mx-input-wrapper:hover .mx-icon-clear{display:block}.mx-input-wrapper:hover .mx-icon-clear+.mx-icon-calendar{display:none}.mx-input{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:34px;padding:6px 30px;padding-left:10px;font-size:14px;line-height:1.4;color:#555;background-color:#fff;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.mx-input:hover,.mx-input:focus{border-color:#409aff}.mx-input:disabled,.mx-input.disabled{color:#ccc;background-color:#f3f3f3;border-color:#ccc;cursor:not-allowed}.mx-input:focus{outline:none}.mx-input::-ms-clear{display:none}.mx-icon-calendar,.mx-icon-clear{position:absolute;top:50%;right:8px;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:16px;line-height:1;color:rgba(0,0,0,.5);vertical-align:middle}.mx-icon-clear{cursor:pointer}.mx-icon-clear:hover{color:rgba(0,0,0,.8)}.mx-datepicker-main{font:14px/1.5 \"Helvetica Neue\",Helvetica,Arial,\"Microsoft Yahei\",sans-serif;color:#73879c;background-color:#fff;border:1px solid #e8e8e8}.mx-datepicker-popup{position:absolute;margin-top:1px;margin-bottom:1px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);z-index:2001}.mx-datepicker-sidebar{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;width:100px;padding:6px;overflow:auto}.mx-datepicker-sidebar+.mx-datepicker-content{margin-left:100px;border-left:1px solid #e8e8e8}.mx-datepicker-body{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mx-btn-shortcut{display:block;padding:0 6px;line-height:24px}.mx-range-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}@media(max-width: 750px){.mx-range-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.mx-datepicker-header{padding:6px 8px;border-bottom:1px solid #e8e8e8}.mx-datepicker-footer{padding:6px 8px;text-align:right;border-top:1px solid #e8e8e8}.mx-calendar{-webkit-box-sizing:border-box;box-sizing:border-box;width:248px;padding:6px 12px}.mx-calendar+.mx-calendar{border-left:1px solid #e8e8e8}.mx-calendar-header,.mx-time-header{-webkit-box-sizing:border-box;box-sizing:border-box;height:34px;line-height:34px;text-align:center;overflow:hidden}.mx-btn-icon-left,.mx-btn-icon-double-left{float:left}.mx-btn-icon-right,.mx-btn-icon-double-right{float:right}.mx-calendar-header-label{font-size:14px}.mx-calendar-decade-separator{margin:0 2px}.mx-calendar-decade-separator:after{content:\"~\"}.mx-calendar-content{position:relative;height:224px;-webkit-box-sizing:border-box;box-sizing:border-box}.mx-calendar-content .cell{cursor:pointer}.mx-calendar-content .cell:hover{color:#73879c;background-color:#f3f9fe}.mx-calendar-content .cell.active{color:#fff;background-color:#1284e7}.mx-calendar-content .cell.in-range{color:#73879c;background-color:#dbedfb}.mx-calendar-content .cell.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}.mx-calendar-week-mode .mx-date-row{cursor:pointer}.mx-calendar-week-mode .mx-date-row:hover{background-color:#f3f9fe}.mx-calendar-week-mode .mx-date-row.mx-active-week{background-color:#dbedfb}.mx-calendar-week-mode .mx-date-row .cell:hover{color:inherit;background-color:transparent}.mx-calendar-week-mode .mx-date-row .cell.active{color:inherit;background-color:transparent}.mx-week-number{opacity:.5}.mx-table{table-layout:fixed;border-collapse:separate;border-spacing:0;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;vertical-align:middle}.mx-table th{padding:0;font-weight:500}.mx-table td{padding:0}.mx-table-date td,.mx-table-date th{height:32px;font-size:12px}.mx-table-date .today{color:#2a90e9}.mx-table-date .cell.not-current-month{color:#ccc}.mx-time{-webkit-box-flex:1;-ms-flex:1;flex:1;width:224px;background:#fff}.mx-time+.mx-time{border-left:1px solid #e8e8e8}.mx-calendar-time{position:absolute;top:0;left:0;width:100%;height:100%}.mx-time-header{border-bottom:1px solid #e8e8e8}.mx-time-content{height:224px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.mx-time-columns{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:100%;overflow:hidden}.mx-time-column{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;border-left:1px solid #e8e8e8;text-align:center}.mx-time-column:first-child{border-left:0}.mx-time-column .mx-time-list{margin:0;padding:0;list-style:none}.mx-time-column .mx-time-list::after{content:\"\";display:block;height:192px}.mx-time-column .mx-time-item{cursor:pointer;font-size:12px;height:32px;line-height:32px}.mx-time-column .mx-time-item:hover{color:#73879c;background-color:#f3f9fe}.mx-time-column .mx-time-item.active{color:#1284e7;background-color:transparent;font-weight:700}.mx-time-column .mx-time-item.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}.mx-time-option{cursor:pointer;padding:8px 10px;font-size:14px;line-height:20px}.mx-time-option:hover{color:#73879c;background-color:#f3f9fe}.mx-time-option.active{color:#1284e7;background-color:transparent;font-weight:700}.mx-time-option.disabled{cursor:not-allowed;color:#ccc;background-color:#f3f3f3}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.cursor-pointer {\n    cursor: pointer;\n    user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/date-format-parse/es/format.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-format-parse/es/format.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/date-format-parse/es/util.js");
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale/en */ "./node_modules/date-format-parse/es/locale/en.js");


var REGEX_FORMAT = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;

function pad(val) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var output = "".concat(Math.abs(val));
  var sign = val < 0 ? '-' : '';

  while (output.length < len) {
    output = "0".concat(output);
  }

  return sign + output;
}

function formatTimezone(offset) {
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + pad(hours, 2) + delimeter + pad(minutes, 2);
}

var meridiem = function meridiem(h, _, isLowercase) {
  var word = h < 12 ? 'AM' : 'PM';
  return isLowercase ? word.toLocaleLowerCase() : word;
};

var formatFlags = {
  Y: function Y(date) {
    var y = date.getFullYear();
    return y <= 9999 ? "".concat(y) : "+".concat(y);
  },
  // Year: 00, 01, ..., 99
  YY: function YY(date) {
    return pad(date.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function YYYY(date) {
    return pad(date.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function M(date) {
    return date.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function MM(date) {
    return pad(date.getMonth() + 1, 2);
  },
  MMM: function MMM(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MMMM: function MMMM(date, locale) {
    return locale.months[date.getMonth()];
  },
  // Day of month: 1, 2, ..., 31
  D: function D(date) {
    return date.getDate();
  },
  // Day of month: 01, 02, ..., 31
  DD: function DD(date) {
    return pad(date.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function HH(date) {
    return pad(date.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function h(date) {
    var hours = date.getHours();

    if (hours === 0) {
      return 12;
    }

    if (hours > 12) {
      return hours % 12;
    }

    return hours;
  },
  // Hour: 01, 02, ..., 12
  hh: function hh() {
    var hours = formatFlags.h.apply(formatFlags, arguments);
    return pad(hours, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function mm(date) {
    return pad(date.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function ss(date) {
    return pad(date.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function d(date) {
    return date.getDay();
  },
  // Day of week: 'Su', 'Mo', ..., 'Sa'
  dd: function dd(date, locale) {
    return locale.weekdaysMin[date.getDay()];
  },
  // Day of week: 'Sun', 'Mon',..., 'Sat'
  ddd: function ddd(date, locale) {
    return locale.weekdaysShort[date.getDay()];
  },
  // Day of week: 'Sunday', 'Monday', ...,'Saturday'
  dddd: function dddd(date, locale) {
    return locale.weekdays[date.getDay()];
  },
  // AM, PM
  A: function A(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), false);
  },
  // am, pm
  a: function a(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), true);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function Z(date) {
    return formatTimezone(date.getTimezoneOffset(), ':');
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function ZZ(date) {
    return formatTimezone(date.getTimezoneOffset());
  },
  // Seconds timestamp: 512969520
  X: function X(date) {
    return Math.floor(date.getTime() / 1000);
  },
  // Milliseconds timestamp: 512969520900
  x: function x(date) {
    return date.getTime();
  },
  w: function w(date, locale) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getWeek"])(date, {
      firstDayOfWeek: locale.firstDayOfWeek,
      firstWeekContainsDate: locale.firstWeekContainsDate
    });
  },
  ww: function ww(date, locale) {
    return pad(formatFlags.w(date, locale), 2);
  }
};

function format(val, str) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var formatStr = str ? String(str) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  var date = Object(_util__WEBPACK_IMPORTED_MODULE_0__["toDate"])(val);

  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isValidDate"])(date)) {
    return 'Invalid Date';
  }

  var locale = options.locale || _locale_en__WEBPACK_IMPORTED_MODULE_1__["default"];
  return formatStr.replace(REGEX_FORMAT, function (match, p1) {
    if (p1) {
      return p1;
    }

    if (typeof formatFlags[match] === 'function') {
      return "".concat(formatFlags[match](date, locale));
    }

    return match;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (format);

/***/ }),

/***/ "./node_modules/date-format-parse/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-format-parse/es/index.js ***!
  \****************************************************/
/*! exports provided: format, parse, isDate, toDate, isValidDate, getWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./node_modules/date-format-parse/es/format.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _format__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse */ "./node_modules/date-format-parse/es/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/date-format-parse/es/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["toDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isValidDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeek", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getWeek"]; });





/***/ }),

/***/ "./node_modules/date-format-parse/es/locale/en.js":
/*!********************************************************!*\
  !*** ./node_modules/date-format-parse/es/locale/en.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/date-format-parse/es/parse.js":
/*!****************************************************!*\
  !*** ./node_modules/date-format-parse/es/parse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse; });
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale/en */ "./node_modules/date-format-parse/es/locale/en.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/date-format-parse/es/util.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formattingTokens = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchShortOffset = /[+-]\d\d:?\d\d/; // +00:00 -00:00 +0000 or -0000

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// const matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; // Word

var YEAR = 'year';
var MONTH = 'month';
var DAY = 'day';
var HOUR = 'hour';
var MINUTE = 'minute';
var SECOND = 'second';
var MILLISECOND = 'millisecond';
var parseFlags = {};

var addParseFlag = function addParseFlag(token, regex, callback) {
  var tokens = Array.isArray(token) ? token : [token];
  var func;

  if (typeof callback === 'string') {
    func = function func(input) {
      var value = parseInt(input, 10);
      return _defineProperty({}, callback, value);
    };
  } else {
    func = callback;
  }

  tokens.forEach(function (key) {
    parseFlags[key] = [regex, func];
  });
};

var escapeStringRegExp = function escapeStringRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

var matchWordRegExp = function matchWordRegExp(localeKey) {
  return function (locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    return new RegExp(array.map(escapeStringRegExp).join('|'));
  };
};

var matchWordCallback = function matchWordCallback(localeKey, key) {
  return function (input, locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    var index = array.indexOf(input);

    if (index < 0) {
      throw new Error('Invalid Word');
    }

    return _defineProperty({}, key, index);
  };
};

addParseFlag('Y', matchSigned, YEAR);
addParseFlag('YY', match2, function (input) {
  var year = new Date().getFullYear();
  var cent = Math.floor(year / 100);
  var value = parseInt(input, 10);
  value = (value > 68 ? cent - 1 : cent) * 100 + value;
  return _defineProperty({}, YEAR, value);
});
addParseFlag('YYYY', match4, YEAR);
addParseFlag('M', match1to2, function (input) {
  return _defineProperty({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MM', match2, function (input) {
  return _defineProperty({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MMM', matchWordRegExp('monthsShort'), matchWordCallback('monthsShort', MONTH));
addParseFlag('MMMM', matchWordRegExp('months'), matchWordCallback('months', MONTH));
addParseFlag('D', match1to2, DAY);
addParseFlag('DD', match2, DAY);
addParseFlag(['H', 'h'], match1to2, HOUR);
addParseFlag(['HH', 'hh'], match2, HOUR);
addParseFlag('m', match1to2, MINUTE);
addParseFlag('mm', match2, MINUTE);
addParseFlag('s', match1to2, SECOND);
addParseFlag('ss', match2, SECOND);
addParseFlag('S', match1, function (input) {
  return _defineProperty({}, MILLISECOND, parseInt(input, 10) * 100);
});
addParseFlag('SS', match2, function (input) {
  return _defineProperty({}, MILLISECOND, parseInt(input, 10) * 10);
});
addParseFlag('SSS', match3, MILLISECOND);

function matchMeridiem(locale) {
  return locale.meridiemParse || /[ap]\.?m?\.?/i;
}

function defaultIsPM(input) {
  return "".concat(input).toLowerCase().charAt(0) === 'p';
}

addParseFlag(['A', 'a'], matchMeridiem, function (input, locale) {
  var isPM = typeof locale.isPM === 'function' ? locale.isPM(input) : defaultIsPM(input);
  return {
    isPM: isPM
  };
});

function offsetFromString(str) {
  var _ref8 = str.match(/([+-]|\d\d)/g) || ['-', '0', '0'],
      _ref9 = _slicedToArray(_ref8, 3),
      symbol = _ref9[0],
      hour = _ref9[1],
      minute = _ref9[2];

  var minutes = parseInt(hour, 10) * 60 + parseInt(minute, 10);

  if (minutes === 0) {
    return 0;
  }

  return symbol === '+' ? -minutes : +minutes;
}

addParseFlag(['Z', 'ZZ'], matchShortOffset, function (input) {
  return {
    offset: offsetFromString(input)
  };
});
addParseFlag('x', matchSigned, function (input) {
  return {
    date: new Date(parseInt(input, 10))
  };
});
addParseFlag('X', matchTimestamp, function (input) {
  return {
    date: new Date(parseFloat(input) * 1000)
  };
});
addParseFlag('d', match1, 'weekday');
addParseFlag('dd', matchWordRegExp('weekdaysMin'), matchWordCallback('weekdaysMin', 'weekday'));
addParseFlag('ddd', matchWordRegExp('weekdaysShort'), matchWordCallback('weekdaysShort', 'weekday'));
addParseFlag('dddd', matchWordRegExp('weekdays'), matchWordCallback('weekdays', 'weekday'));
addParseFlag('w', match1to2, 'week');
addParseFlag('ww', match2, 'week');

function to24hour(hour, isPM) {
  if (hour !== undefined && isPM !== undefined) {
    if (isPM) {
      if (hour < 12) {
        return hour + 12;
      }
    } else if (hour === 12) {
      return 0;
    }
  }

  return hour;
}

function getFullInputArray(input) {
  var backupDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var result = [0, 0, 1, 0, 0, 0, 0];
  var backupArr = [backupDate.getFullYear(), backupDate.getMonth(), backupDate.getDate(), backupDate.getHours(), backupDate.getMinutes(), backupDate.getSeconds(), backupDate.getMilliseconds()];
  var useBackup = true;

  for (var i = 0; i < 7; i++) {
    if (input[i] === undefined) {
      result[i] = useBackup ? backupArr[i] : result[i];
    } else {
      result[i] = input[i];
      useBackup = false;
    }
  }

  return result;
}

function createUTCDate() {
  var date;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var y = args[0];

  if (y < 100 && y >= 0) {
    args[0] += 400;
    date = new Date(Date.UTC.apply(Date, args)); // eslint-disable-next-line no-restricted-globals

    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(Date, args));
  }

  return date;
}

function makeParser(dateString, format, locale) {
  var tokens = format.match(formattingTokens);

  if (!tokens) {
    throw new Error();
  }

  var length = tokens.length;
  var mark = {};

  for (var i = 0; i < length; i += 1) {
    var token = tokens[i];
    var parseTo = parseFlags[token];

    if (!parseTo) {
      var word = token.replace(/^\[|\]$/g, '');

      if (dateString.indexOf(word) === 0) {
        dateString = dateString.substr(word.length);
      } else {
        throw new Error('not match');
      }
    } else {
      var regex = typeof parseTo[0] === 'function' ? parseTo[0](locale) : parseTo[0];
      var parser = parseTo[1];
      var value = (regex.exec(dateString) || [])[0];
      var obj = parser(value, locale);
      mark = _objectSpread({}, mark, {}, obj);
      dateString = dateString.replace(value, '');
    }
  }

  return mark;
}

function parse(str, format) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  try {
    var _options$locale = options.locale,
        _locale = _options$locale === void 0 ? _locale_en__WEBPACK_IMPORTED_MODULE_0__["default"] : _options$locale,
        _options$backupDate = options.backupDate,
        backupDate = _options$backupDate === void 0 ? new Date() : _options$backupDate;

    var parseResult = makeParser(str, format, _locale);
    var year = parseResult.year,
        month = parseResult.month,
        day = parseResult.day,
        hour = parseResult.hour,
        minute = parseResult.minute,
        second = parseResult.second,
        millisecond = parseResult.millisecond,
        isPM = parseResult.isPM,
        date = parseResult.date,
        offset = parseResult.offset,
        weekday = parseResult.weekday,
        week = parseResult.week;

    if (date) {
      return date;
    }

    var inputArray = [year, month, day, hour, minute, second, millisecond];
    inputArray[3] = to24hour(inputArray[3], isPM); // check week

    if (week !== undefined && month === undefined && day === undefined) {
      // new Date(year, 3) make sure in current year
      var firstDate = Object(_util__WEBPACK_IMPORTED_MODULE_1__["startOfWeekYear"])(year === undefined ? backupDate : new Date(year, 3), {
        firstDayOfWeek: _locale.firstDayOfWeek,
        firstWeekContainsDate: _locale.firstWeekContainsDate
      });
      return new Date(firstDate.getTime() + (week - 1) * 7 * 24 * 3600 * 1000);
    }

    var utcDate = createUTCDate.apply(void 0, _toConsumableArray(getFullInputArray(inputArray, backupDate)));
    var offsetMilliseconds = (offset === undefined ? utcDate.getTimezoneOffset() : offset) * 60 * 1000;
    var parsedDate = new Date(utcDate.getTime() + offsetMilliseconds); // check weekday

    if (weekday !== undefined && parsedDate.getDay() !== weekday) {
      return new Date(NaN);
    }

    return parsedDate;
  } catch (e) {
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/date-format-parse/es/util.js":
/*!***************************************************!*\
  !*** ./node_modules/date-format-parse/es/util.js ***!
  \***************************************************/
/*! exports provided: isDate, toDate, isValidDate, startOfWeek, startOfWeekYear, getWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfWeek", function() { return startOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOfWeekYear", function() { return startOfWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeek", function() { return getWeek; });
function isDate(value) {
  return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
function toDate(value) {
  if (isDate(value)) {
    return new Date(value.getTime());
  }

  if (value == null) {
    return new Date(NaN);
  }

  return new Date(value);
}
function isValidDate(value) {
  return isDate(value) && !isNaN(value.getTime());
}
function startOfWeek(value) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!(firstDayOfWeek >= 0 && firstDayOfWeek <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = toDate(value);
  var day = date.getDay();
  var diff = (day + 7 - firstDayOfWeek) % 7;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfWeekYear(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$firstDayOfWeek = _ref.firstDayOfWeek,
      firstDayOfWeek = _ref$firstDayOfWeek === void 0 ? 0 : _ref$firstDayOfWeek,
      _ref$firstWeekContain = _ref.firstWeekContainsDate,
      firstWeekContainsDate = _ref$firstWeekContain === void 0 ? 1 : _ref$firstWeekContain;

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7');
  }

  var date = toDate(value);
  var year = date.getFullYear();
  var firstDateOfFirstWeek = new Date(0);

  for (var i = year + 1; i >= year - 1; i--) {
    firstDateOfFirstWeek.setFullYear(i, 0, firstWeekContainsDate);
    firstDateOfFirstWeek.setHours(0, 0, 0, 0);
    firstDateOfFirstWeek = startOfWeek(firstDateOfFirstWeek, firstDayOfWeek);

    if (date.getTime() >= firstDateOfFirstWeek.getTime()) {
      break;
    }
  }

  return firstDateOfFirstWeek;
}
function getWeek(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$firstDayOfWeek = _ref2.firstDayOfWeek,
      firstDayOfWeek = _ref2$firstDayOfWeek === void 0 ? 0 : _ref2$firstDayOfWeek,
      _ref2$firstWeekContai = _ref2.firstWeekContainsDate,
      firstWeekContainsDate = _ref2$firstWeekContai === void 0 ? 1 : _ref2$firstWeekContai;

  var date = toDate(value);
  var firstDateOfThisWeek = startOfWeek(date, firstDayOfWeek);
  var firstDateOfFirstWeek = startOfWeekYear(date, {
    firstDayOfWeek: firstDayOfWeek,
    firstWeekContainsDate: firstWeekContainsDate
  });
  var diff = firstDateOfThisWeek.getTime() - firstDateOfFirstWeek.getTime();
  return Math.round(diff / (7 * 24 * 3600 * 1000)) + 1;
}

/***/ }),

/***/ "./node_modules/izitoast/dist/css/iziToast.min.css":
/*!*********************************************************!*\
  !*** ./node_modules/izitoast/dist/css/iziToast.min.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./iziToast.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/izitoast/dist/css/iziToast.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/izitoast/dist/js/iziToast.js":
/*!***************************************************!*\
  !*** ./node_modules/izitoast/dist/js/iziToast.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* iziToast | v1.4.0
* http://izitoast.marcelodolce.com
* by Marcelo Dolce.
*/
(function (root, factory) {
	if(true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(typeof global !== 'undefined' ? global : window || this.window || this.global, function (root) {

	'use strict';

	//
	// Variables
	//
	var $iziToast = {},
		PLUGIN_NAME = 'iziToast',
		BODY = document.querySelector('body'),
		ISMOBILE = (/Mobi/.test(navigator.userAgent)) ? true : false,
		ISCHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
		ISFIREFOX = typeof InstallTrigger !== 'undefined',
		ACCEPTSTOUCH = 'ontouchstart' in document.documentElement,
		POSITIONS = ['bottomRight','bottomLeft','bottomCenter','topRight','topLeft','topCenter','center'],
		THEMES = {
			info: {
				color: 'blue',
				icon: 'ico-info'
			},
			success: {
				color: 'green',
				icon: 'ico-success'
			},
			warning: {
				color: 'orange',
				icon: 'ico-warning'
			},
			error: {
				color: 'red',
				icon: 'ico-error'
			},
			question: {
				color: 'yellow',
				icon: 'ico-question'
			}
		},
		MOBILEWIDTH = 568,
		CONFIG = {};

	$iziToast.children = {};

	// Default settings
	var defaults = {
		id: null, 
		class: '',
		title: '',
		titleColor: '',
		titleSize: '',
		titleLineHeight: '',
		message: '',
		messageColor: '',
		messageSize: '',
		messageLineHeight: '',
		backgroundColor: '',
		theme: 'light', // dark
		color: '', // blue, red, green, yellow
		icon: '',
		iconText: '',
		iconColor: '',
		iconUrl: null,
		image: '',
		imageWidth: 50,
		maxWidth: null,
		zindex: null,
		layout: 1,
		balloon: false,
		close: true,
		closeOnEscape: false,
		closeOnClick: false,
		displayMode: 0,
		position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
		target: '',
		targetFirst: true,
		timeout: 5000,
		rtl: false,
		animateInside: true,
		drag: true,
		pauseOnHover: true,
		resetOnHover: false,
		progressBar: true,
		progressBarColor: '',
		progressBarEasing: 'linear',
		overlay: false,
		overlayClose: false,
		overlayColor: 'rgba(0, 0, 0, 0.6)',
		transitionIn: 'fadeInUp', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX
		transitionOut: 'fadeOut', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
		transitionInMobile: 'fadeInUp',
		transitionOutMobile: 'fadeOutDown',
		buttons: {},
		inputs: {},
		onOpening: function () {},
		onOpened: function () {},
		onClosing: function () {},
		onClosed: function () {}
	};

	//
	// Methods
	//


	/**
	 * Polyfill for remove() method
	 */
	if(!('remove' in Element.prototype)) {
	    Element.prototype.remove = function() {
	        if(this.parentNode) {
	            this.parentNode.removeChild(this);
	        }
	    };
	}

	/*
     * Polyfill for CustomEvent for IE >= 9
     * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
     */
    if(typeof window.CustomEvent !== 'function') {
        var CustomEventPolyfill = function (event, params) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };

        CustomEventPolyfill.prototype = window.Event.prototype;

        window.CustomEvent = CustomEventPolyfill;
    }

	/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */
	var forEach = function (collection, callback, scope) {
		if(Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if(Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			if(collection){
				for (var i = 0, len = collection.length; i < len; i++) {
					callback.call(scope, collection[i], i, collection);
				}
			}
		}
	};

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function (defaults, options) {
		var extended = {};
		forEach(defaults, function (value, prop) {
			extended[prop] = defaults[prop];
		});
		forEach(options, function (value, prop) {
			extended[prop] = options[prop];
		});
		return extended;
	};


	/**
	 * Create a fragment DOM elements
	 * @private
	 */
	var createFragElem = function(htmlStr) {
		var frag = document.createDocumentFragment(),
			temp = document.createElement('div');
		temp.innerHTML = htmlStr;
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		return frag;
	};


	/**
	 * Generate new ID
	 * @private
	 */
	var generateId = function(params) {
		var newId = btoa(encodeURIComponent(params));
		return newId.replace(/=/g, "");
	};


	/**
	 * Check if is a color
	 * @private
	 */
	var isColor = function(color){
		if( color.substring(0,1) == '#' || color.substring(0,3) == 'rgb' || color.substring(0,3) == 'hsl' ){
			return true;
		} else {
			return false;
		}
	};


	/**
	 * Check if is a Base64 string
	 * @private
	 */
	var isBase64 = function(str) {
	    try {
	        return btoa(atob(str)) == str;
	    } catch (err) {
	        return false;
	    }
	};


	/**
	 * Drag method of toasts
	 * @private
	 */
	var drag = function() {
	    
	    return {
	        move: function(toast, instance, settings, xpos) {

	        	var opacity,
	        		opacityRange = 0.3,
	        		distance = 180;
	            
	            if(xpos !== 0){
	            	
	            	toast.classList.add(PLUGIN_NAME+'-dragged');

	            	toast.style.transform = 'translateX('+xpos + 'px)';

		            if(xpos > 0){
		            	opacity = (distance-xpos) / distance;
		            	if(opacity < opacityRange){
							instance.hide(extend(settings, { transitionOut: 'fadeOutRight', transitionOutMobile: 'fadeOutRight' }), toast, 'drag');
						}
		            } else {
		            	opacity = (distance+xpos) / distance;
		            	if(opacity < opacityRange){
							instance.hide(extend(settings, { transitionOut: 'fadeOutLeft', transitionOutMobile: 'fadeOutLeft' }), toast, 'drag');
						}
		            }
					toast.style.opacity = opacity;
			
					if(opacity < opacityRange){

						if(ISCHROME || ISFIREFOX)
							toast.style.left = xpos+'px';

						toast.parentNode.style.opacity = opacityRange;

		                this.stopMoving(toast, null);
					}
	            }

				
	        },
	        startMoving: function(toast, instance, settings, e) {

	            e = e || window.event;
	            var posX = ((ACCEPTSTOUCH) ? e.touches[0].clientX : e.clientX),
	                toastLeft = toast.style.transform.replace('px)', '');
	                toastLeft = toastLeft.replace('translateX(', '');
	            var offsetX = posX - toastLeft;

				if(settings.transitionIn){
					toast.classList.remove(settings.transitionIn);
				}
				if(settings.transitionInMobile){
					toast.classList.remove(settings.transitionInMobile);
				}
				toast.style.transition = '';

	            if(ACCEPTSTOUCH) {
	                document.ontouchmove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.touches[0].clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            } else {
	                document.onmousemove = function(e) {
	                    e.preventDefault();
	                    e = e || window.event;
	                    var posX = e.clientX,
	                        finalX = posX - offsetX;
                        drag.move(toast, instance, settings, finalX);
	                };
	            }

	        },
	        stopMoving: function(toast, e) {

	            if(ACCEPTSTOUCH) {
	                document.ontouchmove = function() {};
	            } else {
	            	document.onmousemove = function() {};
	            }

				toast.style.opacity = '';
				toast.style.transform = '';

	            if(toast.classList.contains(PLUGIN_NAME+'-dragged')){
	            	
	            	toast.classList.remove(PLUGIN_NAME+'-dragged');

					toast.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
					setTimeout(function() {
						toast.style.transition = '';
					}, 400);
	            }

	        }
	    };

	}();





	$iziToast.setSetting = function (ref, option, value) {

		$iziToast.children[ref][option] = value;

	};


	$iziToast.getSetting = function (ref, option) {

		return $iziToast.children[ref][option];

	};


	/**
	 * Destroy the current initialization.
	 * @public
	 */
	$iziToast.destroy = function () {

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-overlay'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME+'-wrapper'), function(element, index) {
			element.remove();
		});

		forEach(document.querySelectorAll('.'+PLUGIN_NAME), function(element, index) {
			element.remove();
		});

		this.children = {};

		// Remove event listeners
		document.removeEventListener(PLUGIN_NAME+'-opened', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-opening', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-closing', {}, false);
		document.removeEventListener(PLUGIN_NAME+'-closed', {}, false);
		document.removeEventListener('keyup', {}, false);

		// Reset variables
		CONFIG = {};
	};

	/**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.settings = function (options) {

		// Destroy any existing initializations
		$iziToast.destroy();

		CONFIG = options;
		defaults = extend(defaults, options || {});
	};


	/**
	 * Building themes functions.
	 * @public
	 * @param {Object} options User settings
	 */
	forEach(THEMES, function (theme, name) {

		$iziToast[name] = function (options) {

			var settings = extend(CONFIG, options || {});
			settings = extend(theme, settings || {});

			this.show(settings);
		};

	});


	/**
	 * Do the calculation to move the progress bar
	 * @private
	 */
	$iziToast.progress = function (options, $toast, callback) {


		var that = this,
			ref = $toast.getAttribute('data-iziToast-ref'),
			settings = extend(this.children[ref], options || {}),
			$elem = $toast.querySelector('.'+PLUGIN_NAME+'-progressbar div');

	    return {
	        start: function() {

	        	if(typeof settings.time.REMAINING == 'undefined'){

	        		$toast.classList.remove(PLUGIN_NAME+'-reseted');

		        	if($elem !== null){
						$elem.style.transition = 'width '+ settings.timeout +'ms '+settings.progressBarEasing;
						$elem.style.width = '0%';
					}

		        	settings.time.START = new Date().getTime();
		        	settings.time.END = settings.time.START + settings.timeout;
					settings.time.TIMER = setTimeout(function() {

						clearTimeout(settings.time.TIMER);

						if(!$toast.classList.contains(PLUGIN_NAME+'-closing')){

							that.hide(settings, $toast, 'timeout');

							if(typeof callback === 'function'){
								callback.apply(that);
							}
						}

					}, settings.timeout);			
		        	that.setSetting(ref, 'time', settings.time);
	        	}
	        },
	        pause: function() {

	        	if(typeof settings.time.START !== 'undefined' && !$toast.classList.contains(PLUGIN_NAME+'-paused') && !$toast.classList.contains(PLUGIN_NAME+'-reseted')){

        			$toast.classList.add(PLUGIN_NAME+'-paused');

					settings.time.REMAINING = settings.time.END - new Date().getTime();

					clearTimeout(settings.time.TIMER);

					that.setSetting(ref, 'time', settings.time);

					if($elem !== null){
						var computedStyle = window.getComputedStyle($elem),
							propertyWidth = computedStyle.getPropertyValue('width');

						$elem.style.transition = 'none';
						$elem.style.width = propertyWidth;					
					}

					if(typeof callback === 'function'){
						setTimeout(function() {
							callback.apply(that);						
						}, 10);
					}
        		}
	        },
	        resume: function() {

				if(typeof settings.time.REMAINING !== 'undefined'){

					$toast.classList.remove(PLUGIN_NAME+'-paused');

		        	if($elem !== null){
						$elem.style.transition = 'width '+ settings.time.REMAINING +'ms '+settings.progressBarEasing;
						$elem.style.width = '0%';
					}

		        	settings.time.END = new Date().getTime() + settings.time.REMAINING;
					settings.time.TIMER = setTimeout(function() {

						clearTimeout(settings.time.TIMER);

						if(!$toast.classList.contains(PLUGIN_NAME+'-closing')){

							that.hide(settings, $toast, 'timeout');

							if(typeof callback === 'function'){
								callback.apply(that);
							}
						}


					}, settings.time.REMAINING);

					that.setSetting(ref, 'time', settings.time);
				} else {
					this.start();
				}
	        },
	        reset: function(){

				clearTimeout(settings.time.TIMER);

				delete settings.time.REMAINING;

				that.setSetting(ref, 'time', settings.time);

				$toast.classList.add(PLUGIN_NAME+'-reseted');

				$toast.classList.remove(PLUGIN_NAME+'-paused');

				if($elem !== null){
					$elem.style.transition = 'none';
					$elem.style.width = '100%';
				}

				if(typeof callback === 'function'){
					setTimeout(function() {
						callback.apply(that);						
					}, 10);
				}
	        }
	    };

	};


	/**
	 * Close the specific Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.hide = function (options, $toast, closedBy) {

		if(typeof $toast != 'object'){
			$toast = document.querySelector($toast);
		}		

		var that = this,
			settings = extend(this.children[$toast.getAttribute('data-iziToast-ref')], options || {});
			settings.closedBy = closedBy || null;

		delete settings.time.REMAINING;

		$toast.classList.add(PLUGIN_NAME+'-closing');

		// Overlay
		(function(){

			var $overlay = document.querySelector('.'+PLUGIN_NAME+'-overlay');
			if($overlay !== null){
				var refs = $overlay.getAttribute('data-iziToast-ref');		
					refs = refs.split(',');
				var index = refs.indexOf(String(settings.ref));

				if(index !== -1){
					refs.splice(index, 1);			
				}
				$overlay.setAttribute('data-iziToast-ref', refs.join());

				if(refs.length === 0){
					$overlay.classList.remove('fadeIn');
					$overlay.classList.add('fadeOut');
					setTimeout(function() {
						$overlay.remove();
					}, 700);
				}
			}

		})();

		if(settings.transitionIn){
			$toast.classList.remove(settings.transitionIn);
		} 

		if(settings.transitionInMobile){
			$toast.classList.remove(settings.transitionInMobile);
		}

		if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
			if(settings.transitionOutMobile)
				$toast.classList.add(settings.transitionOutMobile);
		} else {
			if(settings.transitionOut)
				$toast.classList.add(settings.transitionOut);
		}
		var H = $toast.parentNode.offsetHeight;
				$toast.parentNode.style.height = H+'px';
				$toast.style.pointerEvents = 'none';
		
		if(!ISMOBILE || window.innerWidth > MOBILEWIDTH){
			$toast.parentNode.style.transitionDelay = '0.2s';
		}

		try {
			var event = new CustomEvent(PLUGIN_NAME+'-closing', {detail: settings, bubbles: true, cancelable: true});
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		setTimeout(function() {
			
			$toast.parentNode.style.height = '0px';
			$toast.parentNode.style.overflow = '';

			setTimeout(function(){
				
				delete that.children[settings.ref];

				$toast.parentNode.remove();

				try {
					var event = new CustomEvent(PLUGIN_NAME+'-closed', {detail: settings, bubbles: true, cancelable: true});
					document.dispatchEvent(event);
				} catch(ex){
					console.warn(ex);
				}

				if(typeof settings.onClosed !== 'undefined'){
					settings.onClosed.apply(null, [settings, $toast, closedBy]);
				}

			}, 1000);
		}, 200);


		if(typeof settings.onClosing !== 'undefined'){
			settings.onClosing.apply(null, [settings, $toast, closedBy]);
		}
	};

	/**
	 * Create and show the Toast
	 * @public
	 * @param {Object} options User settings
	 */
	$iziToast.show = function (options) {

		var that = this;

		// Merge user options with defaults
		var settings = extend(CONFIG, options || {});
			settings = extend(defaults, settings);
			settings.time = {};

		if(settings.id === null){
			settings.id = generateId(settings.title+settings.message+settings.color);
		}

		if(settings.displayMode === 1 || settings.displayMode == 'once'){
			try {
				if(document.querySelectorAll('.'+PLUGIN_NAME+'#'+settings.id).length > 0){
					return false;
				}
			} catch (exc) {
				console.warn('['+PLUGIN_NAME+'] Could not find an element with this selector: '+'#'+settings.id+'. Try to set an valid id.');
			}
		}

		if(settings.displayMode === 2 || settings.displayMode == 'replace'){
			try {
				forEach(document.querySelectorAll('.'+PLUGIN_NAME+'#'+settings.id), function(element, index) {
					that.hide(settings, element, 'replaced');
				});
			} catch (exc) {
				console.warn('['+PLUGIN_NAME+'] Could not find an element with this selector: '+'#'+settings.id+'. Try to set an valid id.');
			}
		}

		settings.ref = new Date().getTime() + Math.floor((Math.random() * 10000000) + 1);

		$iziToast.children[settings.ref] = settings;

		var $DOM = {
			body: document.querySelector('body'),
			overlay: document.createElement('div'),
			toast: document.createElement('div'),
			toastBody: document.createElement('div'),
			toastTexts: document.createElement('div'),
			toastCapsule: document.createElement('div'),
			cover: document.createElement('div'),
			buttons: document.createElement('div'),
			inputs: document.createElement('div'),
			icon: !settings.iconUrl ? document.createElement('i') : document.createElement('img'),
			wrapper: null
		};

		$DOM.toast.setAttribute('data-iziToast-ref', settings.ref);
		$DOM.toast.appendChild($DOM.toastBody);
		$DOM.toastCapsule.appendChild($DOM.toast);

		// CSS Settings
		(function(){

			$DOM.toast.classList.add(PLUGIN_NAME);
			$DOM.toast.classList.add(PLUGIN_NAME+'-opening');
			$DOM.toastCapsule.classList.add(PLUGIN_NAME+'-capsule');
			$DOM.toastBody.classList.add(PLUGIN_NAME + '-body');
			$DOM.toastTexts.classList.add(PLUGIN_NAME + '-texts');

			if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
				if(settings.transitionInMobile)
					$DOM.toast.classList.add(settings.transitionInMobile);
			} else {
				if(settings.transitionIn)
					$DOM.toast.classList.add(settings.transitionIn);
			}

			if(settings.class){
				var classes = settings.class.split(' ');
				forEach(classes, function (value, index) {
					$DOM.toast.classList.add(value);
				});
			}

			if(settings.id){ $DOM.toast.id = settings.id; }

			if(settings.rtl){
				$DOM.toast.classList.add(PLUGIN_NAME + '-rtl');
				$DOM.toast.setAttribute('dir', 'rtl');
			}

			if(settings.layout > 1){ $DOM.toast.classList.add(PLUGIN_NAME+'-layout'+settings.layout); }

			if(settings.balloon){ $DOM.toast.classList.add(PLUGIN_NAME+'-balloon'); }

			if(settings.maxWidth){
				if( !isNaN(settings.maxWidth) ){
					$DOM.toast.style.maxWidth = settings.maxWidth+'px';
				} else {
					$DOM.toast.style.maxWidth = settings.maxWidth;
				}
			}

			if(settings.theme !== '' || settings.theme !== 'light') {

				$DOM.toast.classList.add(PLUGIN_NAME+'-theme-'+settings.theme);
			}

			if(settings.color) { //#, rgb, rgba, hsl
				
				if( isColor(settings.color) ){
					$DOM.toast.style.background = settings.color;
				} else {
					$DOM.toast.classList.add(PLUGIN_NAME+'-color-'+settings.color);
				}
			}

			if(settings.backgroundColor) {
				$DOM.toast.style.background = settings.backgroundColor;
				if(settings.balloon){
					$DOM.toast.style.borderColor = settings.backgroundColor;				
				}
			}
		})();

		// Cover image
		(function(){
			if(settings.image) {
				$DOM.cover.classList.add(PLUGIN_NAME + '-cover');
				$DOM.cover.style.width = settings.imageWidth + 'px';

				if(isBase64(settings.image.replace(/ /g,''))){
					$DOM.cover.style.backgroundImage = 'url(data:image/png;base64,' + settings.image.replace(/ /g,'') + ')';
				} else {
					$DOM.cover.style.backgroundImage = 'url(' + settings.image + ')';
				}

				if(settings.rtl){
					$DOM.toastBody.style.marginRight = (settings.imageWidth + 10) + 'px';
				} else {
					$DOM.toastBody.style.marginLeft = (settings.imageWidth + 10) + 'px';				
				}
				$DOM.toast.appendChild($DOM.cover);
			}
		})();

		// Button close
		(function(){
			if(settings.close){
				
				$DOM.buttonClose = document.createElement('button');
				$DOM.buttonClose.type = 'button';
				$DOM.buttonClose.classList.add(PLUGIN_NAME + '-close');
				$DOM.buttonClose.addEventListener('click', function (e) {
					var button = e.target;
					that.hide(settings, $DOM.toast, 'button');
				});
				$DOM.toast.appendChild($DOM.buttonClose);
			} else {
				if(settings.rtl){
					$DOM.toast.style.paddingLeft = '18px';
				} else {
					$DOM.toast.style.paddingRight = '18px';
				}
			}
		})();

		// Progress Bar & Timeout
		(function(){

			if(settings.progressBar){
				$DOM.progressBar = document.createElement('div');
				$DOM.progressBarDiv = document.createElement('div');
				$DOM.progressBar.classList.add(PLUGIN_NAME + '-progressbar');
				$DOM.progressBarDiv.style.background = settings.progressBarColor;
				$DOM.progressBar.appendChild($DOM.progressBarDiv);
				$DOM.toast.appendChild($DOM.progressBar);
			}

			if(settings.timeout) {

				if(settings.pauseOnHover && !settings.resetOnHover){
					
					$DOM.toast.addEventListener('mouseenter', function (e) {
						that.progress(settings, $DOM.toast).pause();
					});
					$DOM.toast.addEventListener('mouseleave', function (e) {
						that.progress(settings, $DOM.toast).resume();
					});
				}

				if(settings.resetOnHover){

					$DOM.toast.addEventListener('mouseenter', function (e) {
						that.progress(settings, $DOM.toast).reset();
					});
					$DOM.toast.addEventListener('mouseleave', function (e) {
						that.progress(settings, $DOM.toast).start();
					});
				}
			}
		})();

		// Icon
		(function(){

			if(settings.iconUrl) {

				$DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon');
				$DOM.icon.setAttribute('src', settings.iconUrl);

			} else if(settings.icon) {
				$DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon ' + settings.icon);
				
				if(settings.iconText){
					$DOM.icon.appendChild(document.createTextNode(settings.iconText));
				}
				
				if(settings.iconColor){
					$DOM.icon.style.color = settings.iconColor;
				}				
			}

			if(settings.icon || settings.iconUrl) {

				if(settings.rtl){
					$DOM.toastBody.style.paddingRight = '33px';
				} else {
					$DOM.toastBody.style.paddingLeft = '33px';				
				}

				$DOM.toastBody.appendChild($DOM.icon);
			}

		})();

		// Title & Message
		(function(){
			if(settings.title.length > 0) {

				$DOM.strong = document.createElement('strong');
				$DOM.strong.classList.add(PLUGIN_NAME + '-title');
				$DOM.strong.appendChild(createFragElem(settings.title));
				$DOM.toastTexts.appendChild($DOM.strong);

				if(settings.titleColor) {
					$DOM.strong.style.color = settings.titleColor;
				}
				if(settings.titleSize) {
					if( !isNaN(settings.titleSize) ){
						$DOM.strong.style.fontSize = settings.titleSize+'px';
					} else {
						$DOM.strong.style.fontSize = settings.titleSize;
					}
				}
				if(settings.titleLineHeight) {
					if( !isNaN(settings.titleSize) ){
						$DOM.strong.style.lineHeight = settings.titleLineHeight+'px';
					} else {
						$DOM.strong.style.lineHeight = settings.titleLineHeight;
					}
				}
			}

			if(settings.message.length > 0) {

				$DOM.p = document.createElement('p');
				$DOM.p.classList.add(PLUGIN_NAME + '-message');
				$DOM.p.appendChild(createFragElem(settings.message));
				$DOM.toastTexts.appendChild($DOM.p);

				if(settings.messageColor) {
					$DOM.p.style.color = settings.messageColor;
				}
				if(settings.messageSize) {
					if( !isNaN(settings.titleSize) ){
						$DOM.p.style.fontSize = settings.messageSize+'px';
					} else {
						$DOM.p.style.fontSize = settings.messageSize;
					}
				}
				if(settings.messageLineHeight) {
					
					if( !isNaN(settings.titleSize) ){
						$DOM.p.style.lineHeight = settings.messageLineHeight+'px';
					} else {
						$DOM.p.style.lineHeight = settings.messageLineHeight;
					}
				}
			}

			if(settings.title.length > 0 && settings.message.length > 0) {
				if(settings.rtl){
					$DOM.strong.style.marginLeft = '10px';
				} else if(settings.layout !== 2 && !settings.rtl) {
					$DOM.strong.style.marginRight = '10px';	
				}
			}
		})();

		$DOM.toastBody.appendChild($DOM.toastTexts);

		// Inputs
		var $inputs;
		(function(){
			if(settings.inputs.length > 0) {

				$DOM.inputs.classList.add(PLUGIN_NAME + '-inputs');

				forEach(settings.inputs, function (value, index) {
					$DOM.inputs.appendChild(createFragElem(value[0]));

					$inputs = $DOM.inputs.childNodes;

					$inputs[index].classList.add(PLUGIN_NAME + '-inputs-child');

					if(value[3]){
						setTimeout(function() {
							$inputs[index].focus();
						}, 300);
					}

					$inputs[index].addEventListener(value[1], function (e) {
						var ts = value[2];
						return ts(that, $DOM.toast, this, e);
					});
				});
				$DOM.toastBody.appendChild($DOM.inputs);
			}
		})();

		// Buttons
		(function(){
			if(settings.buttons.length > 0) {

				$DOM.buttons.classList.add(PLUGIN_NAME + '-buttons');

				forEach(settings.buttons, function (value, index) {
					$DOM.buttons.appendChild(createFragElem(value[0]));

					var $btns = $DOM.buttons.childNodes;

					$btns[index].classList.add(PLUGIN_NAME + '-buttons-child');

					if(value[2]){
						setTimeout(function() {
							$btns[index].focus();
						}, 300);
					}

					$btns[index].addEventListener('click', function (e) {
						e.preventDefault();
						var ts = value[1];
						return ts(that, $DOM.toast, this, e, $inputs);
					});
				});
			}
			$DOM.toastBody.appendChild($DOM.buttons);
		})();

		if(settings.message.length > 0 && (settings.inputs.length > 0 || settings.buttons.length > 0)) {
			$DOM.p.style.marginBottom = '0';
		}

		if(settings.inputs.length > 0 || settings.buttons.length > 0){
			if(settings.rtl){
				$DOM.toastTexts.style.marginLeft = '10px';
			} else {
				$DOM.toastTexts.style.marginRight = '10px';
			}
			if(settings.inputs.length > 0 && settings.buttons.length > 0){
				if(settings.rtl){
					$DOM.inputs.style.marginLeft = '8px';
				} else {
					$DOM.inputs.style.marginRight = '8px';
				}
			}
		}

		// Wrap
		(function(){
			$DOM.toastCapsule.style.visibility = 'hidden';
			setTimeout(function() {
				var H = $DOM.toast.offsetHeight;
				var style = $DOM.toast.currentStyle || window.getComputedStyle($DOM.toast);
				var marginTop = style.marginTop;
					marginTop = marginTop.split('px');
					marginTop = parseInt(marginTop[0]);
				var marginBottom = style.marginBottom;
					marginBottom = marginBottom.split('px');
					marginBottom = parseInt(marginBottom[0]);

				$DOM.toastCapsule.style.visibility = '';
				$DOM.toastCapsule.style.height = (H+marginBottom+marginTop)+'px';

				setTimeout(function() {
					$DOM.toastCapsule.style.height = 'auto';
					if(settings.target){
						$DOM.toastCapsule.style.overflow = 'visible';
					}
				}, 500);

				if(settings.timeout) {
					that.progress(settings, $DOM.toast).start();
				}
			}, 100);
		})();

		// Target
		(function(){
			var position = settings.position;

			if(settings.target){

				$DOM.wrapper = document.querySelector(settings.target);
				$DOM.wrapper.classList.add(PLUGIN_NAME + '-target');

				if(settings.targetFirst) {
					$DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
				} else {
					$DOM.wrapper.appendChild($DOM.toastCapsule);
				}

			} else {

				if( POSITIONS.indexOf(settings.position) == -1 ){
					console.warn('['+PLUGIN_NAME+'] Incorrect position.\nIt can be › ' + POSITIONS);
					return;
				}

				if(ISMOBILE || window.innerWidth <= MOBILEWIDTH){
					if(settings.position == 'bottomLeft' || settings.position == 'bottomRight' || settings.position == 'bottomCenter'){
						position = PLUGIN_NAME+'-wrapper-bottomCenter';
					}
					else if(settings.position == 'topLeft' || settings.position == 'topRight' || settings.position == 'topCenter'){
						position = PLUGIN_NAME+'-wrapper-topCenter';
					}
					else {
						position = PLUGIN_NAME+'-wrapper-center';
					}
				} else {
					position = PLUGIN_NAME+'-wrapper-'+position;
				}
				$DOM.wrapper = document.querySelector('.' + PLUGIN_NAME + '-wrapper.'+position);

				if(!$DOM.wrapper) {
					$DOM.wrapper = document.createElement('div');
					$DOM.wrapper.classList.add(PLUGIN_NAME + '-wrapper');
					$DOM.wrapper.classList.add(position);
					document.body.appendChild($DOM.wrapper);
				}
				if(settings.position == 'topLeft' || settings.position == 'topCenter' || settings.position == 'topRight'){
					$DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
				} else {
					$DOM.wrapper.appendChild($DOM.toastCapsule);
				}
			}

			if(!isNaN(settings.zindex)) {
				$DOM.wrapper.style.zIndex = settings.zindex;
			} else {
				console.warn('['+PLUGIN_NAME+'] Invalid zIndex.');
			}
		})();

		// Overlay
		(function(){

			if(settings.overlay) {

				if( document.querySelector('.'+PLUGIN_NAME+'-overlay.fadeIn') !== null ){

					$DOM.overlay = document.querySelector('.'+PLUGIN_NAME+'-overlay');
					$DOM.overlay.setAttribute('data-iziToast-ref', $DOM.overlay.getAttribute('data-iziToast-ref') + ',' + settings.ref);

					if(!isNaN(settings.zindex) && settings.zindex !== null) {
						$DOM.overlay.style.zIndex = settings.zindex-1;
					}

				} else {

					$DOM.overlay.classList.add(PLUGIN_NAME+'-overlay');
					$DOM.overlay.classList.add('fadeIn');
					$DOM.overlay.style.background = settings.overlayColor;
					$DOM.overlay.setAttribute('data-iziToast-ref', settings.ref);
					if(!isNaN(settings.zindex) && settings.zindex !== null) {
						$DOM.overlay.style.zIndex = settings.zindex-1;
					}
					document.querySelector('body').appendChild($DOM.overlay);
				}

				if(settings.overlayClose) {

					$DOM.overlay.removeEventListener('click', {});
					$DOM.overlay.addEventListener('click', function (e) {
						that.hide(settings, $DOM.toast, 'overlay');
					});
				} else {
					$DOM.overlay.removeEventListener('click', {});
				}
			}			
		})();

		// Inside animations
		(function(){
			if(settings.animateInside){
				$DOM.toast.classList.add(PLUGIN_NAME+'-animateInside');
			
				var animationTimes = [200, 100, 300];
				if(settings.transitionIn == 'bounceInLeft' || settings.transitionIn == 'bounceInRight'){
					animationTimes = [400, 200, 400];
				}

				if(settings.title.length > 0) {
					setTimeout(function(){
						$DOM.strong.classList.add('slideIn');
					}, animationTimes[0]);
				}

				if(settings.message.length > 0) {
					setTimeout(function(){
						$DOM.p.classList.add('slideIn');
					}, animationTimes[1]);
				}

				if(settings.icon || settings.iconUrl) {
					setTimeout(function(){
						$DOM.icon.classList.add('revealIn');
					}, animationTimes[2]);
				}

				var counter = 150;
				if(settings.buttons.length > 0 && $DOM.buttons) {

					setTimeout(function(){

						forEach($DOM.buttons.childNodes, function(element, index) {

							setTimeout(function(){
								element.classList.add('revealIn');
							}, counter);
							counter = counter + 150;
						});

					}, settings.inputs.length > 0 ? 150 : 0);
				}

				if(settings.inputs.length > 0 && $DOM.inputs) {
					counter = 150;
					forEach($DOM.inputs.childNodes, function(element, index) {

						setTimeout(function(){
							element.classList.add('revealIn');
						}, counter);
						counter = counter + 150;
					});
				}
			}
		})();

		settings.onOpening.apply(null, [settings, $DOM.toast]);

		try {
			var event = new CustomEvent(PLUGIN_NAME + '-opening', {detail: settings, bubbles: true, cancelable: true});
			document.dispatchEvent(event);
		} catch(ex){
			console.warn(ex);
		}

		setTimeout(function() {

			$DOM.toast.classList.remove(PLUGIN_NAME+'-opening');
			$DOM.toast.classList.add(PLUGIN_NAME+'-opened');

			try {
				var event = new CustomEvent(PLUGIN_NAME + '-opened', {detail: settings, bubbles: true, cancelable: true});
				document.dispatchEvent(event);
			} catch(ex){
				console.warn(ex);
			}

			settings.onOpened.apply(null, [settings, $DOM.toast]);
		}, 1000);

		if(settings.drag){

			if(ACCEPTSTOUCH) {

			    $DOM.toast.addEventListener('touchstart', function(e) {
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $DOM.toast.addEventListener('touchend', function(e) {
			        drag.stopMoving(this, e);
			    }, false);
			} else {

			    $DOM.toast.addEventListener('mousedown', function(e) {
			    	e.preventDefault();
			        drag.startMoving(this, that, settings, e);
			    }, false);

			    $DOM.toast.addEventListener('mouseup', function(e) {
			    	e.preventDefault();
			        drag.stopMoving(this, e);
			    }, false);
			}
		}

		if(settings.closeOnEscape) {

			document.addEventListener('keyup', function (evt) {
				evt = evt || window.event;
				if(evt.keyCode == 27) {
				    that.hide(settings, $DOM.toast, 'esc');
				}
			});
		}

		if(settings.closeOnClick) {
			$DOM.toast.addEventListener('click', function (evt) {
				that.hide(settings, $DOM.toast, 'toast');
			});
		}

		that.toast = $DOM.toast;		
	};
	

	return $iziToast;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-clickaway/dist/vue-clickaway.common.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      {
        staticClass:
          "navbar navbar-expand navbar-light bg-white topbar mb-4 sticky-top shadow"
      },
      [
        _c("ul", { staticClass: "navbar-nav ml-auto" }, [
          _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
            _c(
              "a",
              {
                staticClass: "nav-link dropdown-toggle",
                attrs: {
                  href: "javascript:",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": _vm.showAlertDropdown
                },
                on: {
                  click: function($event) {
                    _vm.showAlertDropdown = !_vm.showAlertDropdown
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-bell fa-fw" }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "badge badge-danger badge-counter" },
                  [_vm._v("3+")]
                )
              ]
            ),
            _vm._v(" "),
            _vm.showAlertDropdown
              ? _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "on-clickaway",
                        rawName: "v-on-clickaway",
                        value: function() {
                          return (_vm.showAlertDropdown = false)
                        },
                        expression: "() => (showAlertDropdown = false)"
                      }
                    ],
                    staticClass:
                      "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                    attrs: { "aria-labelledby": "alertsDropdown" }
                  },
                  [
                    _c("h6", { staticClass: "dropdown-header" }, [
                      _vm._v("Alerts Center")
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "dropdown-item text-center small text-gray-500",
                        attrs: { href: "#" }
                      },
                      [_vm._v("Show All Alerts")]
                    )
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
            _c(
              "a",
              {
                staticClass: "nav-link dropdown-toggle",
                attrs: {
                  href: "javascript:",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": _vm.showMessageDropdown
                },
                on: {
                  click: function($event) {
                    _vm.showMessageDropdown = !_vm.showMessageDropdown
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-envelope fa-fw" }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "badge badge-danger badge-counter" },
                  [_vm._v("7")]
                )
              ]
            ),
            _vm._v(" "),
            _vm.showMessageDropdown
              ? _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "on-clickaway",
                        rawName: "v-on-clickaway",
                        value: function() {
                          return (_vm.showMessageDropdown = false)
                        },
                        expression: "() => (showMessageDropdown = false)"
                      }
                    ],
                    staticClass:
                      "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
                    attrs: { "aria-labelledby": "messagesDropdown" }
                  },
                  [
                    _c("h6", { staticClass: "dropdown-header" }, [
                      _vm._v("Message Center")
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "dropdown-item text-center small text-gray-500",
                        attrs: { href: "#" }
                      },
                      [_vm._v("Read More Messages")]
                    )
                  ]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item dropdown no-arrow" }, [
            _c(
              "a",
              {
                staticClass: "nav-link dropdown-toggle",
                attrs: {
                  href: "javascript:",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": _vm.showUserDropdown
                },
                on: {
                  click: function($event) {
                    _vm.showUserDropdown = !_vm.showUserDropdown
                  }
                }
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "mr-2 d-none d-lg-inline text-gray-600 small"
                  },
                  [_vm._v("Valerie Luna")]
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "img-profile rounded-circle",
                  attrs: {
                    src: "https://source.unsplash.com/QAB-WJcbgJk/60x60"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm.showUserDropdown
              ? _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "on-clickaway",
                        rawName: "v-on-clickaway",
                        value: function() {
                          return (_vm.showUserDropdown = false)
                        },
                        expression: "() => (showUserDropdown = false)"
                      }
                    ],
                    staticClass:
                      "dropdown-menu dropdown-menu-right shadow animated--grow-in",
                    attrs: { "aria-labelledby": "userDropdown" }
                  },
                  [
                    _vm._m(7),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "dropdown-divider" }),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "javascript:" },
                        on: { click: _vm.logout }
                      },
                      [
                        _c("i", {
                          staticClass:
                            "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                        }),
                        _vm._v("\n            Logout\n          ")
                      ]
                    )
                  ]
                )
              : _vm._e()
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "mr-3" }, [
          _c("div", { staticClass: "icon-circle bg-primary" }, [
            _c("i", { staticClass: "fas fa-file-alt text-white" })
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("December 12, 2019")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "font-weight-bold" }, [
            _vm._v("A new monthly report is ready to download!")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "mr-3" }, [
          _c("div", { staticClass: "icon-circle bg-success" }, [
            _c("i", { staticClass: "fas fa-donate text-white" })
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("December 7, 2019")
          ]),
          _vm._v(
            "\n              $290.29 has been deposited into your account!\n            "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "mr-3" }, [
          _c("div", { staticClass: "icon-circle bg-warning" }, [
            _c("i", { staticClass: "fas fa-exclamation-triangle text-white" })
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("December 2, 2019")
          ]),
          _vm._v(
            "\n              Spending Alert: We've noticed unusually high spending for your\n              account.\n            "
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "dropdown-list-image mr-3" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: "https://source.unsplash.com/fn_BT9fwg_E/60x60",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "status-indicator bg-success" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "font-weight-bold" }, [
          _c("div", { staticClass: "text-truncate" }, [
            _vm._v(
              "\n                Hi there! I am wondering if you can help me with a problem\n                I've been having.\n              "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("Emily Fowler · 58m")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "dropdown-list-image mr-3" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: "https://source.unsplash.com/AU4VPcFN4LE/60x60",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "status-indicator" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-truncate" }, [
            _vm._v(
              "\n                I have the photos that you ordered last month, how would you\n                like them sent to you?\n              "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("Jae Chun · 1d")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "dropdown-list-image mr-3" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: "https://source.unsplash.com/CS2uCrpNzJY/60x60",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "status-indicator bg-warning" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-truncate" }, [
            _vm._v(
              "\n                Last month's report looks great, I am very happy with the\n                progress so far, keep up the good work!\n              "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("Morgan Alvarez · 2d")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-item d-flex align-items-center",
        attrs: { href: "#" }
      },
      [
        _c("div", { staticClass: "dropdown-list-image mr-3" }, [
          _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "status-indicator bg-success" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "text-truncate" }, [
            _vm._v(
              "\n                Am I a good boy? The reason I ask is because someone told me\n                that people say this to all dogs, even if they aren't good...\n              "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "small text-gray-500" }, [
            _vm._v("Chicken the Dog · 2w")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-user fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v("\n            Profile\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v("\n            Settings\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-list fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v("\n            Activity Log\n          ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-gradient-primary" }, [
    _c(
      "ul",
      {
        staticClass: "navbar-nav sidebar sidebar-dark accordion",
        class: { toggled: _vm.showSidebar }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("hr", { staticClass: "sidebar-divider my-0 mb-2" }),
        _vm._v(" "),
        _vm._l(_vm.menuItems, function(menuItem, ind) {
          return _c(
            "li",
            { key: ind, staticClass: "nav-item" },
            [
              menuItem.children
                ? [
                    _c(
                      "div",
                      {
                        staticClass: "nav-link cursor-pointer",
                        class: { collapsed: !menuItem.childrenShow },
                        attrs: { "data-toggle": "collapse" },
                        on: {
                          click: function($event) {
                            return _vm.activateMenuItem(menuItem)
                          }
                        }
                      },
                      [
                        _c("i", { class: menuItem.icon }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(menuItem.text))])
                      ]
                    ),
                    _vm._v(" "),
                    menuItem.childrenShow
                      ? _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "on-clickaway",
                                rawName: "v-on-clickaway",
                                value: function() {
                                  return (menuItem.childrenShow = false)
                                },
                                expression:
                                  "() => (menuItem.childrenShow = false)"
                              }
                            ],
                            staticClass: "collapse show"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-white py-2 collapse-inner rounded"
                              },
                              _vm._l(menuItem.children, function(child, cInd) {
                                return _c(
                                  "router-link",
                                  {
                                    key: cInd,
                                    staticClass: "collapse-item",
                                    attrs: { to: child.link }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(child.text) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              }),
                              1
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                : [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: menuItem.link } },
                      [
                        _c("i", { class: menuItem.icon }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(menuItem.text))])
                      ]
                    )
                  ]
            ],
            2
          )
        }),
        _vm._v(" "),
        _c("hr", { staticClass: "sidebar-divider" }),
        _vm._v(" "),
        _c("div", { staticClass: "text-center d-none d-md-inline" }, [
          _c("button", {
            staticClass: "rounded-circle border-0",
            attrs: { id: "sidebarToggle" },
            on: {
              click: function($event) {
                _vm.menuItems.map(function(item) {
                  return (item.childrenShow = false)
                })
                _vm.showSidebar = !_vm.showSidebar
              }
            }
          })
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "sidebar-brand d-flex align-items-center justify-content-center",
        attrs: { href: "index.html" }
      },
      [
        _c("div", { staticClass: "sidebar-brand-icon rotate-n-15" }, [
          _c("i", { staticClass: "fas fa-laugh-wink" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-brand-text mx-3" }, [
          _vm._v("SB Admin "),
          _c("sup", [_vm._v("2")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { attrs: { id: "wrapper" } },
      [
        _c("side-bar"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "d-flex flex-column",
            attrs: { id: "content-wrapper" }
          },
          [
            _c(
              "div",
              { attrs: { id: "content" } },
              [
                _c("nav-bar"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "container-fluid" },
                  [_c("router-view")],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "sticky-footer bg-white" }, [
      _c("div", { staticClass: "container my-auto" }, [
        _c("div", { staticClass: "copyright text-center my-auto" }, [
          _c("span", [_vm._v("Copyright © Your Website 2020")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
  * vue-router v3.4.9
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ( true && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
    .replace(encodeReserveRE, encodeReserveReplacer)
    .replace(commaRE, ','); };

function decode (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    if (true) {
      warn(false, ("Error decoding \"" + str + "\". Leaving it intact."));
    }
  }
  return str
}

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     true && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value)
      ? value.map(castQueryParamValue)
      : castQueryParamValue(value);
  }
  return parsedQuery
}

var castQueryParamValue = function (value) { return (value == null || typeof value === 'object' ? value : String(value)); };

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj
    ? Object.keys(obj)
      .map(function (key) {
        var val = obj[key];

        if (val === undefined) {
          return ''
        }

        if (val === null) {
          return encode(key)
        }

        if (Array.isArray(val)) {
          var result = [];
          val.forEach(function (val2) {
            if (val2 === undefined) {
              return
            }
            if (val2 === null) {
              result.push(encode(key));
            } else {
              result.push(encode(key) + '=' + encode(val2));
            }
          });
          return result.join('&')
        }

        return encode(key) + '=' + encode(val)
      })
      .filter(function (x) { return x.length > 0; })
      .join('&')
    : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) { return false }
    var bVal = b[key];
    // query values can be null and undefined
    if (aVal == null || bVal == null) { return aVal === bVal }
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

function handleRouteEntered (route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) { continue }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) { cbs[i$1](instance); }
      }
    }
  }
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }

      // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.
      handleRouteEntered(route);
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cache
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (true) {
      // Fix #3072 no warn if `pathMatch` is string
      warn(typeof params.pathMatch === 'string', ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (true) {
          warn(
            false,
            ("RouterLink with to=\"" + (this.to) + "\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element.")
          );
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (true) {
    // warn if routes do not include leading slashes
    var found = pathList
    // check for missing leading slash
      .filter(function (path) { return path && path.charAt(0) !== '*' && path.charAt(0) !== '/'; });

    if (found.length > 0) {
      var pathNames = found.map(function (path) { return ("- " + path); }).join('\n');
      warn(false, ("Non-nested routes must include a leading slash character. Fix the following routes: \n" + pathNames));
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(
        path || name
      )) + " cannot be a " + "string id. Use an actual component instead."
    );

    warn(
      // eslint-disable-next-line no-control-regex
      !/[^\u0000-\u007F]+/.test(path),
      "Route with path \"" + path + "\" contains unencoded characters, make sure " +
        "your path is correctly encoded before passing it to the router. Use " +
        "encodeURI to encode static segments of your path."
    );
  }

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(function (child) { return /^\/?$/.test(child.path); })
      ) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
            "the default child route will not be rendered. Remove the name from " +
            "this route and use the name of the default child route for named " +
            "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if ( true && alias === path) {
        warn(
          false,
          ("Found an alias with the same value as the path: \"" + path + "\". You have to remove that alias. It will be ignored in development.")
        );
        // skip in dev to make it work
        continue
      }

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ( true && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
          "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(
        !keys[key.name],
        ("Duplicate param keys in route with path: \"" + path + "\"")
      );
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var _key = genStateKey();

function getStateKey () {
  return _key
}

function setStateKey (key) {
  return (_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (true) {
            assert(false, err.toString());
          }
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

// When changing thing, also edit router.d.ts
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected when going from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(
      to
    )) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  );
  // backwards compatible with the first introduction of Errors
  error.name = 'NavigationDuplicated';
  return error
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isNavigationFailure (err, errorType) {
  return (
    isError(err) &&
    err._isRouter &&
    (errorType == null || err.type === errorType)
  )
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           true && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route;
  // catch redirect option https://github.com/vuejs/vue-router/issues/3201
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    });
    // Exception should still be thrown
    throw e
  }
  var prev = this.current;
  this.confirmTransition(
    route,
    function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        // Initial redirection should not mark the history as ready yet
        // because it's triggered by the redirection instead
        // https://github.com/vuejs/vue-router/issues/3225
        // https://github.com/vuejs/vue-router/issues/3331
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this$1.ready = true;
          this$1.readyErrorCbs.forEach(function (cb) {
            cb(err);
          });
        }
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  this.pending = route;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    lastRouteIndex === lastCurrentIndex &&
    route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardown = function teardown () {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];

  // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294
  this.current = START;
  this.pending = null;
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }
        match.enteredCbs[key].push(cb);
      }
      next(cb);
    })
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        var prev = this$1.current;
        this$1.index = targetIndex;
        this$1.updateRoute(route);
        this$1.router.afterHooks.forEach(function (hook) {
          hook && hook(route, prev);
        });
      },
      function (err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback =
    mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   true &&
    assert(
      install.installed,
      "not installed. Make sure to call `Vue.use(VueRouter)` " +
        "before creating root instance."
    );

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) { this$1.history.teardown(); }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      var from = history.current;
      var expectScroll = this$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;

      if (supportsScroll && 'fullPath' in routeOrError) {
        handleScroll(this$1, routeOrError, from, false);
      }
    };
    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners,
      setupListeners
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply(
    [],
    route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key]
      })
    })
  )
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.4.9';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.css":
/*!*****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-select.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-select/dist/vue-select.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=8)}([function(t,e,n){var o=n(4),i=n(5),s=n(6);t.exports=function(t){return o(t)||i(t)||s()}},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(1),r=n.n(s),a=n(3),l=n.n(a),c={props:{autoscroll:{type:Boolean,default:!0}},watch:{typeAheadPointer:function(){this.autoscroll&&this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t,e=(null===(t=this.$refs.dropdownMenu)||void 0===t?void 0:t.children[this.typeAheadPointer])||!1;if(e){var n=this.getDropdownViewport(),o=e.getBoundingClientRect(),i=o.top,s=o.bottom,r=o.height;if(i<n.top)return this.$refs.dropdownMenu.scrollTop=e.offsetTop;if(s>n.bottom)return this.$refs.dropdownMenu.scrollTop=e.offsetTop-(n.height-r)}},getDropdownViewport:function(){return this.$refs.dropdownMenu?this.$refs.dropdownMenu.getBoundingClientRect():{height:0,top:0,bottom:0}}}},u={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(){for(var t=0;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}}},methods:{typeAheadUp:function(){for(var t=this.typeAheadPointer-1;t>=0;t--)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadDown:function(){for(var t=this.typeAheadPointer+1;t<this.filteredOptions.length;t++)if(this.selectable(this.filteredOptions[t])){this.typeAheadPointer=t;break}},typeAheadSelect:function(){var t=this.filteredOptions[this.typeAheadPointer];t&&this.select(t)}}},p={props:{loading:{type:Boolean,default:!1}},data:function(){return{mutableLoading:!1}},watch:{search:function(){this.$emit("search",this.search,this.toggleLoading)},loading:function(t){this.mutableLoading=t}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.mutableLoading=null==t?!this.mutableLoading:t}}};function h(t,e,n,o,i,s,r,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}var d={Deselect:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10"}},[e("path",{attrs:{d:"M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"}})])}),[],!1,null,null,null).exports,OpenIndicator:h({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10"}},[e("path",{attrs:{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"}})])}),[],!1,null,null,null).exports},f={inserted:function(t,e,n){var o=n.context;if(o.appendToBody){var i=o.$refs.toggle.getBoundingClientRect(),s=i.height,r=i.top,a=i.left,l=i.width,c=window.scrollX||window.pageXOffset,u=window.scrollY||window.pageYOffset;t.unbindPosition=o.calculatePosition(t,o,{width:l+"px",left:c+a+"px",top:u+r+s+"px"}),document.body.appendChild(t)}},unbind:function(t,e,n){n.context.appendToBody&&(t.unbindPosition&&"function"==typeof t.unbindPosition&&t.unbindPosition(),t.parentNode&&t.parentNode.removeChild(t))}};var y=function(t){var e={};return Object.keys(t).sort().forEach((function(n){e[n]=t[n]})),JSON.stringify(e)},b=0;var g=function(){return++b};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={components:m({},d),mixins:[c,u,p],directives:{appendToBody:f},props:{value:{},components:{type:Object,default:function(){return{}}},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},searchable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},placeholder:{type:String,default:""},transition:{type:String,default:"vs__fade"},clearSearchOnSelect:{type:Boolean,default:!0},closeOnSelect:{type:Boolean,default:!0},label:{type:String,default:"label"},autocomplete:{type:String,default:"off"},reduce:{type:Function,default:function(t){return t}},selectable:{type:Function,default:function(t){return!0}},getOptionLabel:{type:Function,default:function(t){return"object"===r()(t)?t.hasOwnProperty(this.label)?t[this.label]:console.warn('[vue-select warn]: Label key "option.'.concat(this.label,'" does not')+" exist in options object ".concat(JSON.stringify(t),".\n")+"https://vue-select.org/api/props.html#getoptionlabel"):t}},getOptionKey:{type:Function,default:function(t){if("object"!==r()(t))return t;try{return t.hasOwnProperty("id")?t.id:y(t)}catch(e){return console.warn("[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.\nhttps://vue-select.org/api/props.html#getoptionkey",t,e)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(t,e,n){return(e||"").toLowerCase().indexOf(n.toLowerCase())>-1}},filter:{type:Function,default:function(t,e){var n=this;return t.filter((function(t){var o=n.getOptionLabel(t);return"number"==typeof o&&(o=o.toString()),n.filterBy(t,o,e)}))}},createOption:{type:Function,default:function(t){return"object"===r()(this.optionList[0])?l()({},this.label,t):t}},resetOnOptionsChange:{default:!1,validator:function(t){return["function","boolean"].includes(r()(t))}},clearSearchOnBlur:{type:Function,default:function(t){var e=t.clearSearchOnSelect,n=t.multiple;return e&&!n}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(t,e){return t}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(t,e,n){var o=n.width,i=n.top,s=n.left;t.style.top=i,t.style.left=s,t.style.width=o}}},data:function(){return{uid:g(),search:"",open:!1,isComposing:!1,pushedTags:[],_value:[]}},watch:{options:function(t,e){var n=this;!this.taggable&&("function"==typeof n.resetOnOptionsChange?n.resetOnOptionsChange(t,e,n.selectedValue):n.resetOnOptionsChange)&&this.clearSelection(),this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value)},value:function(t){this.isTrackingValues&&this.setInternalValueFromOptions(t)},multiple:function(){this.clearSelection()},open:function(t){this.$emit(t?"open":"close")}},created:function(){this.mutableLoading=this.loading,void 0!==this.value&&this.isTrackingValues&&this.setInternalValueFromOptions(this.value),this.$on("option:created",this.pushTag)},methods:{setInternalValueFromOptions:function(t){var e=this;Array.isArray(t)?this.$data._value=t.map((function(t){return e.findOptionFromReducedValue(t)})):this.$data._value=this.findOptionFromReducedValue(t)},select:function(t){this.$emit("option:selecting",t),this.isOptionSelected(t)||(this.taggable&&!this.optionExists(t)&&this.$emit("option:created",t),this.multiple&&(t=this.selectedValue.concat(t)),this.updateValue(t),this.$emit("option:selected",t)),this.onAfterSelect(t)},deselect:function(t){var e=this;this.$emit("option:deselecting",t),this.updateValue(this.selectedValue.filter((function(n){return!e.optionComparator(n,t)}))),this.$emit("option:deselected",t)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(t){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(t){var e=this;void 0===this.value&&(this.$data._value=t),null!==t&&(t=Array.isArray(t)?t.map((function(t){return e.reduce(t)})):this.reduce(t)),this.$emit("input",t)},toggleDropdown:function(t){var e=t.target!==this.searchEl;e&&t.preventDefault();var n=[].concat(i()(this.$refs.deselectButtons||[]),i()([this.$refs.clearButton]||false));void 0===this.searchEl||n.filter(Boolean).some((function(e){return e.contains(t.target)||e===t.target}))?t.preventDefault():this.open&&e?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(t){var e=this;return this.selectedValue.some((function(n){return e.optionComparator(n,t)}))},optionComparator:function(t,e){return this.getOptionKey(t)===this.getOptionKey(e)},findOptionFromReducedValue:function(t){var e=this,n=[].concat(i()(this.options),i()(this.pushedTags)).filter((function(n){return JSON.stringify(e.reduce(n))===JSON.stringify(t)}));return 1===n.length?n[0]:n.find((function(t){return e.optionComparator(t,e.$data._value)}))||t},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var t=null;this.multiple&&(t=i()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(t)}},optionExists:function(t){var e=this;return this.optionList.some((function(n){return e.optionComparator(n,t)}))},normalizeOptionForSlot:function(t){return"object"===r()(t)?t:l()({},this.label,t)},pushTag:function(t){this.pushedTags.push(t)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var t=this.clearSearchOnSelect,e=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:t,multiple:e})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,0!==this.search.length||0!==this.options.length||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(t){var e=this,n=function(t){return t.preventDefault(),!e.isComposing&&e.typeAheadSelect()},o={8:function(t){return e.maybeDeleteValue()},9:function(t){return e.onTab()},27:function(t){return e.onEscape()},38:function(t){return t.preventDefault(),e.typeAheadUp()},40:function(t){return t.preventDefault(),e.typeAheadDown()}};this.selectOnKeyCodes.forEach((function(t){return o[t]=n}));var i=this.mapKeydown(o,this);if("function"==typeof i[t.keyCode])return i[t.keyCode](t)}},computed:{isTrackingValues:function(){return void 0===this.value||this.$options.propsData.hasOwnProperty("reduce")},selectedValue:function(){var t=this.value;return this.isTrackingValues&&(t=this.$data._value),t?[].concat(t):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$scopedSlots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var t=this,e={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:m({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return t.isComposing=!0},compositionend:function(){return t.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(e){return t.search=e.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.loading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:e,listFooter:e,header:m({},e,{deselect:this.deselect}),footer:m({},e,{deselect:this.deselect})}},childComponents:function(){return m({},d,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return!this.noDrop&&(this.open&&!this.mutableLoading)},searchPlaceholder:function(){if(this.isValueEmpty&&this.placeholder)return this.placeholder},filteredOptions:function(){var t=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return t;var e=this.search.length?this.filter(t,this.search,this):t;if(this.taggable&&this.search.length){var n=this.createOption(this.search);this.optionExists(n)||e.unshift(n)}return e},isValueEmpty:function(){return 0===this.selectedValue.length},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}}},O=(n(7),h(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-select",class:t.stateClasses,attrs:{dir:t.dir}},[t._t("header",null,null,t.scope.header),t._v(" "),n("div",{ref:"toggle",staticClass:"vs__dropdown-toggle",attrs:{id:"vs"+t.uid+"__combobox",role:"combobox","aria-expanded":t.dropdownOpen.toString(),"aria-owns":"vs"+t.uid+"__listbox","aria-label":"Search for option"},on:{mousedown:function(e){return t.toggleDropdown(e)}}},[n("div",{ref:"selectedOptions",staticClass:"vs__selected-options"},[t._l(t.selectedValue,(function(e){return t._t("selected-option-container",[n("span",{key:t.getOptionKey(e),staticClass:"vs__selected"},[t._t("selected-option",[t._v("\n            "+t._s(t.getOptionLabel(e))+"\n          ")],null,t.normalizeOptionForSlot(e)),t._v(" "),t.multiple?n("button",{ref:"deselectButtons",refInFor:!0,staticClass:"vs__deselect",attrs:{disabled:t.disabled,type:"button",title:"Deselect "+t.getOptionLabel(e),"aria-label":"Deselect "+t.getOptionLabel(e)},on:{click:function(n){return t.deselect(e)}}},[n(t.childComponents.Deselect,{tag:"component"})],1):t._e()],2)],{option:t.normalizeOptionForSlot(e),deselect:t.deselect,multiple:t.multiple,disabled:t.disabled})})),t._v(" "),t._t("search",[n("input",t._g(t._b({staticClass:"vs__search"},"input",t.scope.search.attributes,!1),t.scope.search.events))],null,t.scope.search)],2),t._v(" "),n("div",{ref:"actions",staticClass:"vs__actions"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showClearButton,expression:"showClearButton"}],ref:"clearButton",staticClass:"vs__clear",attrs:{disabled:t.disabled,type:"button",title:"Clear Selected","aria-label":"Clear Selected"},on:{click:t.clearSelection}},[n(t.childComponents.Deselect,{tag:"component"})],1),t._v(" "),t._t("open-indicator",[t.noDrop?t._e():n(t.childComponents.OpenIndicator,t._b({tag:"component"},"component",t.scope.openIndicator.attributes,!1))],null,t.scope.openIndicator),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],staticClass:"vs__spinner"},[t._v("Loading...")])],null,t.scope.spinner)],2)]),t._v(" "),n("transition",{attrs:{name:t.transition}},[t.dropdownOpen?n("ul",{directives:[{name:"append-to-body",rawName:"v-append-to-body"}],key:"vs"+t.uid+"__listbox",ref:"dropdownMenu",staticClass:"vs__dropdown-menu",attrs:{id:"vs"+t.uid+"__listbox",role:"listbox",tabindex:"-1"},on:{mousedown:function(e){return e.preventDefault(),t.onMousedown(e)},mouseup:t.onMouseUp}},[t._t("list-header",null,null,t.scope.listHeader),t._v(" "),t._l(t.filteredOptions,(function(e,o){return n("li",{key:t.getOptionKey(e),staticClass:"vs__dropdown-option",class:{"vs__dropdown-option--selected":t.isOptionSelected(e),"vs__dropdown-option--highlight":o===t.typeAheadPointer,"vs__dropdown-option--disabled":!t.selectable(e)},attrs:{role:"option",id:"vs"+t.uid+"__option-"+o,"aria-selected":o===t.typeAheadPointer||null},on:{mouseover:function(n){t.selectable(e)&&(t.typeAheadPointer=o)},mousedown:function(n){n.preventDefault(),n.stopPropagation(),t.selectable(e)&&t.select(e)}}},[t._t("option",[t._v("\n          "+t._s(t.getOptionLabel(e))+"\n        ")],null,t.normalizeOptionForSlot(e))],2)})),t._v(" "),0===t.filteredOptions.length?n("li",{staticClass:"vs__no-options"},[t._t("no-options",[t._v("Sorry, no matching options.")],null,t.scope.noOptions)],2):t._e(),t._v(" "),t._t("list-footer",null,null,t.scope.listFooter)],2):n("ul",{staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"vs"+t.uid+"__listbox",role:"listbox"}})]),t._v(" "),t._t("footer",null,null,t.scope.footer)],2)}),[],!1,null,null,null).exports),w={ajax:p,pointer:u,pointerScroll:c};n.d(e,"VueSelect",(function(){return O})),n.d(e,"mixins",(function(){return w}));e.default=O}])}));
//# sourceMappingURL=vue-select.js.map

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.12';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/vue2-datepicker/index.css":
/*!************************************************!*\
  !*** ./node_modules/vue2-datepicker/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--6-1!../postcss-loader/src??ref--6-2!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue2-datepicker/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue2-datepicker/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/vue2-datepicker/index.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_format_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-format-parse */ "./node_modules/date-format-parse/es/index.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _extends$1() {
  return _extends$1 = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) {
      for (var d in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
      }
    }

    return a;
  }, _extends$1.apply(this, arguments);
}

var normalMerge = ["attrs", "props", "domProps"],
    toArrayMerge = ["class", "style", "directives"],
    functionalMerge = ["on", "nativeOn"],
    mergeJsxProps = function mergeJsxProps(a) {
  return a.reduce(function (c, a) {
    for (var b in a) {
      if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends$1({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]],
            e = a[b] instanceof Array ? a[b] : [a[b]];
        c[b] = d.concat(e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a[b]) {
          if (c[b][f]) {
            var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
            c[b][f] = g.concat(h);
          } else c[b][f] = a[b][f];
        }
      } else if ("hook" == b) for (var i in a[b]) {
        c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
      } else c[b] = a[b];
    }

    return c;
  }, {});
},
    mergeFn = function mergeFn(a, b) {
  return function () {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};

var helper = mergeJsxProps;

// new Date(10, 0, 1) The year from 0 to 99 will be incremented by 1900 automatically.
function createDate(y) {
  var M = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var date = new Date(y, M, d, h, m, s, ms);

  if (y < 100 && y >= 0) {
    date.setFullYear(y);
  }

  return date;
}
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
function isValidRangeDate(date) {
  return Array.isArray(date) && date.length === 2 && date.every(isValidDate) && date[0] <= date[1];
}
function isValidDates(dates) {
  return Array.isArray(dates) && dates.every(isValidDate);
}
function getValidDate(value) {
  var date = new Date(value);

  if (isValidDate(date)) {
    return date;
  }

  for (var _len = arguments.length, backup = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    backup[_key - 1] = arguments[_key];
  }

  if (backup.length) {
    return getValidDate.apply(void 0, backup);
  }

  return new Date();
}
function startOfYear(value) {
  var date = new Date(value);
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(value) {
  var date = new Date(value);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfDay(value) {
  var date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getCalendar(_ref) {
  var firstDayOfWeek = _ref.firstDayOfWeek,
      year = _ref.year,
      month = _ref.month;
  var arr = []; // change to the last day of the last month

  var calendar = createDate(year, month, 0);
  var lastDayInLastMonth = calendar.getDate(); // getDay() 0 is Sunday, 1 is Monday

  var firstDayInLastMonth = lastDayInLastMonth - (calendar.getDay() + 7 - firstDayOfWeek) % 7;

  for (var i = firstDayInLastMonth; i <= lastDayInLastMonth; i++) {
    arr.push(createDate(year, month, i - lastDayInLastMonth));
  } // change to the last day of the current month


  calendar.setMonth(month + 1, 0);
  var lastDayInCurrentMonth = calendar.getDate();

  for (var _i = 1; _i <= lastDayInCurrentMonth; _i++) {
    arr.push(createDate(year, month, _i));
  }

  var lastMonthLength = lastDayInLastMonth - firstDayInLastMonth + 1;
  var nextMonthLength = 6 * 7 - lastMonthLength - lastDayInCurrentMonth;

  for (var _i2 = 1; _i2 <= nextMonthLength; _i2++) {
    arr.push(createDate(year, month, lastDayInCurrentMonth + _i2));
  }

  return arr;
}
function setMonth(dirtyDate, dirtyMonth) {
  var date = new Date(dirtyDate);
  var month = Number(dirtyMonth);
  var year = date.getFullYear();
  var daysInMonth = createDate(year, month + 1, 0).getDate();
  var day = date.getDate();
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
function assignTime(target, source) {
  var date = new Date(target);
  var time = new Date(source);
  date.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
  return date;
}

/**
 * chunk the array
 * @param {Array} arr
 * @param {Number} size
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    return [];
  }

  var result = [];
  var len = arr.length;
  var i = 0;
  size = size || len;

  while (i < len) {
    result.push(arr.slice(i, i += size));
  }

  return result;
}
/**
 * isObject
 * @param {*} obj
 * @returns {Boolean}
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * pick object
 * @param {Object} obj
 * @param {Array|String} props
 */

function pick(obj, props) {
  if (!isObject(obj)) return {};

  if (!Array.isArray(props)) {
    props = [props];
  }

  var res = {};
  props.forEach(function (prop) {
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  });
  return res;
}
/**
 * deep merge two object without merging array
 * @param {object} target
 * @param {object} source
 */

function mergeDeep(target, source) {
  if (!isObject(target)) {
    return {};
  }

  var result = target;

  if (isObject(source)) {
    Object.keys(source).forEach(function (key) {
      var value = source[key];

      if (isObject(value) && isObject(target[key])) {
        value = mergeDeep(target[key], value);
      }

      result = _objectSpread2({}, result, _defineProperty({}, key, value));
    });
  }

  return result;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var en = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};
var _default = locale;
exports["default"] = _default;
module.exports = exports.default;
});

var en$1 = unwrapExports(en);

var lang = {
  formatLocale: en$1,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true
};

var defaultLocale = 'en';
var locales = {};
locales[defaultLocale] = lang;
function locale(name, object, isLocal) {
  if (typeof name !== 'string') return locales[defaultLocale];
  var l = defaultLocale;

  if (locales[name]) {
    l = name;
  }

  if (object) {
    locales[name] = object;
    l = name;
  }

  if (!isLocal) {
    defaultLocale = l;
  }

  return locales[name] || locales[defaultLocale];
}
/**
 * get locale object
 * @param {string} name lang
 */

function getLocale(name) {
  return locale(name, null, true);
}

/* istanbul ignore file */
function rafThrottle(fn) {
  var isRunning = false;
  return function fnBinfRaf() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(function () {
      isRunning = false;
      fn.apply(_this, args);
    });
  };
}

/**
 * get the hidden element width, height
 * @param {HTMLElement} element dom
 */
function getPopupElementSize(element) {
  var originalDisplay = element.style.display;
  var originalVisibility = element.style.visibility;
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  var styles = window.getComputedStyle(element);
  var width = element.offsetWidth + parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
  var height = element.offsetHeight + parseInt(styles.marginTop, 10) + parseInt(styles.marginBottom, 10);
  element.style.display = originalDisplay;
  element.style.visibility = originalVisibility;
  return {
    width: width,
    height: height
  };
}
/**
 * get the popup position
 * @param {HTMLElement} el relative element
 * @param {Number} targetWidth target element's width
 * @param {Number} targetHeight target element's height
 * @param {Boolean} fixed
 */

function getRelativePosition(el, targetWidth, targetHeight, fixed) {
  var left = 0;
  var top = 0;
  var offsetX = 0;
  var offsetY = 0;
  var relativeRect = el.getBoundingClientRect();
  var dw = document.documentElement.clientWidth;
  var dh = document.documentElement.clientHeight;

  if (fixed) {
    offsetX = window.pageXOffset + relativeRect.left;
    offsetY = window.pageYOffset + relativeRect.top;
  }

  if (dw - relativeRect.left < targetWidth && relativeRect.right < targetWidth) {
    left = offsetX - relativeRect.left + 1;
  } else if (relativeRect.left + relativeRect.width / 2 <= dw / 2) {
    left = offsetX;
  } else {
    left = offsetX + relativeRect.width - targetWidth;
  }

  if (relativeRect.top <= targetHeight && dh - relativeRect.bottom <= targetHeight) {
    top = offsetY + dh - relativeRect.top - targetHeight;
  } else if (relativeRect.top + relativeRect.height / 2 <= dh / 2) {
    top = offsetY + relativeRect.height;
  } else {
    top = offsetY - targetHeight;
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px")
  };
}
function getScrollParent(node) {
  var until = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (!node || node === until) {
    return null;
  }

  var style = function style(value, prop) {
    return getComputedStyle(value, null).getPropertyValue(prop);
  };

  var regex = /(auto|scroll)/;
  var scroll = regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
  return scroll ? node : getScrollParent(node.parentNode, until);
}

//
var script = {
  name: 'Popup',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      top: '',
      left: ''
    };
  },
  watch: {
    visible: {
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        this.$nextTick(function () {
          if (val) {
            _this.displayPopup();
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }

    this._clickoutEvent = 'ontouchend' in document ? 'touchstart' : 'mousedown';
    document.addEventListener(this._clickoutEvent, this.handleClickOutside); // change the popup position when resize or scroll

    var relativeElement = this.$parent.$el;
    this._displayPopup = rafThrottle(function () {
      return _this2.displayPopup();
    });
    this._scrollParent = getScrollParent(relativeElement) || window;

    this._scrollParent.addEventListener('scroll', this._displayPopup);

    window.addEventListener('resize', this._displayPopup);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.appendToBody && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    document.removeEventListener(this._clickoutEvent, this.handleClickOutside);

    this._scrollParent.removeEventListener('scroll', this._displayPopup);

    window.removeEventListener('resize', this._displayPopup);
  },
  methods: {
    handleClickOutside: function handleClickOutside(evt) {
      if (!this.visible) return;
      var target = evt.target;
      var el = this.$el;

      if (el && !el.contains(target)) {
        this.$emit('clickoutside', evt);
      }
    },
    displayPopup: function displayPopup() {
      if (!this.visible) return;
      var popup = this.$el;
      var relativeElement = this.$parent.$el;
      var appendToBody = this.appendToBody;

      if (!this._popupRect) {
        this._popupRect = getPopupElementSize(popup);
      }

      var _this$_popupRect = this._popupRect,
          width = _this$_popupRect.width,
          height = _this$_popupRect.height;

      var _getRelativePosition = getRelativePosition(relativeElement, width, height, appendToBody),
          left = _getRelativePosition.left,
          top = _getRelativePosition.top;

      this.left = left;
      this.top = top;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition', {
    attrs: {
      "name": _vm.prefixClass + "-zoom-in-down"
    }
  }, [_vm.visible ? _c('div', {
    class: _vm.prefixClass + "-datepicker-main " + _vm.prefixClass + "-datepicker-popup",
    style: {
      top: _vm.top,
      left: _vm.left,
      position: 'absolute'
    }
  }, [_vm._t("default")], 2) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1024 1024",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
    }
  })]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1024 1024",
      "width": "1em",
      "height": "1em"
    }
  }, [_c('path', {
    attrs: {
      "d": "M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"
    }
  })]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, {}, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    type: String
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', _vm._g({
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-icon-" + _vm.type,
    attrs: {
      "type": "button"
    }
  }, _vm.$listeners), [_c('i', {
    class: _vm.prefixClass + "-icon-" + _vm.type
  })]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$1, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var script$2 = {
  name: 'TableDate',
  components: {
    IconButton: __vue_component__$3
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    getWeek: {
      default: function _default() {
        return date_format_parse__WEBPACK_IMPORTED_MODULE_0__["getWeek"];
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    getRowClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    firstDayOfWeek: function firstDayOfWeek() {
      return this.getLocale().formatLocale.firstDayOfWeek || 0;
    },
    yearMonth: function yearMonth() {
      var _this$getLocale = this.getLocale(),
          yearFormat = _this$getLocale.yearFormat,
          monthBeforeYear = _this$getLocale.monthBeforeYear,
          _this$getLocale$month = _this$getLocale.monthFormat,
          monthFormat = _this$getLocale$month === void 0 ? 'MMM' : _this$getLocale$month;

      var yearLabel = {
        panel: 'year',
        label: this.formatDate(this.calendar, yearFormat)
      };
      var monthLabel = {
        panel: 'month',
        label: this.formatDate(this.calendar, monthFormat)
      };
      return monthBeforeYear ? [monthLabel, yearLabel] : [yearLabel, monthLabel];
    },
    days: function days() {
      var locale = this.getLocale();
      var days = locale.days || locale.formatLocale.weekdaysMin;
      return days.concat(days).slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
    },
    dates: function dates() {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      var arr = getCalendar({
        firstDayOfWeek: this.firstDayOfWeek,
        year: year,
        month: month
      });
      return chunk(arr, 7);
    }
  },
  methods: {
    getNextCalendar: function getNextCalendar(diffMonth) {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      return createDate(year, month + diffMonth);
    },
    handleIconLeftClick: function handleIconLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-1), 'last-month');
    },
    handleIconRightClick: function handleIconRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(1), 'next-month');
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-12), 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(12), 'next-year');
    },
    handlePanelChange: function handlePanelChange(panel) {
      this.$emit('changepanel', panel);
    },
    handleCellClick: function handleCellClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var index = target.getAttribute('data-row-col');

      if (index) {
        var _index$split$map = index.split(',').map(function (v) {
          return parseInt(v, 10);
        }),
            _index$split$map2 = _slicedToArray(_index$split$map, 2),
            row = _index$split$map2[0],
            col = _index$split$map2[1];

        var date = this.dates[row][col];
        this.$emit('select', new Date(date));
      }
    },
    formatDate: function formatDate(date, fmt) {
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_0__["format"])(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    getCellTitle: function getCellTitle(date) {
      var fmt = this.titleFormat;
      return this.formatDate(date, fmt);
    },
    getWeekNumber: function getWeekNumber(date) {
      return this.getWeek(date, this.getLocale().formatLocale);
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-calendar " + _vm.prefixClass + "-calendar-panel-date"
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('icon-button', {
    attrs: {
      "type": "double-left"
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.handleIconLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "double-right"
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "right"
    },
    on: {
      "click": _vm.handleIconRightClick
    }
  }), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, _vm._l(_vm.yearMonth, function (item) {
    return _c('button', {
      key: item.panel,
      class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-current-" + item.panel,
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.handlePanelChange(item.panel);
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.label) + "\n      ")]);
  }), 0)], 1), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-date"
  }, [_c('thead', [_c('tr', [_vm.showWeekNumber ? _c('th', {
    class: _vm.prefixClass + "-week-number-header"
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.days, function (day) {
    return _c('th', {
      key: day
    }, [_vm._v(_vm._s(day))]);
  })], 2)]), _vm._v(" "), _c('tbody', {
    on: {
      "click": _vm.handleCellClick
    }
  }, _vm._l(_vm.dates, function (row, i) {
    return _c('tr', {
      key: i,
      class: [_vm.prefixClass + "-date-row", _vm.getRowClasses(row)]
    }, [_vm.showWeekNumber ? _c('td', {
      class: _vm.prefixClass + "-week-number",
      attrs: {
        "data-row-col": i + ",0"
      }
    }, [_vm._v("\n            " + _vm._s(_vm.getWeekNumber(row[0])) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell),
        attrs: {
          "data-row-col": i + "," + j,
          "title": _vm.getCellTitle(cell)
        }
      }, [_c('div', [_vm._v(_vm._s(cell.getDate()))])]);
    })], 2);
  }), 0)])])]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$2, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
var script$3 = {
  name: 'TableMonth',
  components: {
    IconButton: __vue_component__$3
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    calendarYear: function calendarYear() {
      return this.calendar.getFullYear();
    },
    months: function months() {
      var locale = this.getLocale();
      var monthsLocale = locale.months || locale.formatLocale.monthsShort;
      var months = monthsLocale.map(function (text, month) {
        return {
          text: text,
          month: month
        };
      });
      return chunk(months, 3);
    }
  },
  methods: {
    getNextCalendar: function getNextCalendar(diffYear) {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      return createDate(year + diffYear, month);
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-1), 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(1), 'next-year');
    },
    handlePanelChange: function handlePanelChange() {
      this.$emit('changepanel', 'year');
    },
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var month = target.getAttribute('data-month');

      if (month) {
        this.$emit('select', parseInt(month, 10));
      }
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-calendar " + _vm.prefixClass + "-calendar-panel-month"
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('icon-button', {
    attrs: {
      "type": "double-left"
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "double-right"
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, [_c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handlePanelChange
    }
  }, [_vm._v("\n        " + _vm._s(_vm.calendarYear) + "\n      ")])])], 1), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-month",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l(_vm.months, function (row, i) {
    return _c('tr', {
      key: i
    }, _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell.month),
        attrs: {
          "data-month": cell.month
        }
      }, [_c('div', [_vm._v(_vm._s(cell.text))])]);
    }), 0);
  }), 0)])]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$3, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

//
var script$4 = {
  name: 'TableYear',
  components: {
    IconButton: __vue_component__$3
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendar: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getYearPanel: {
      type: Function
    }
  },
  computed: {
    years: function years() {
      var calendar = new Date(this.calendar);

      if (typeof this.getYearPanel === 'function') {
        return this.getYearPanel(calendar);
      }

      return this.getYears(calendar);
    },
    firstYear: function firstYear() {
      return this.years[0][0];
    },
    lastYear: function lastYear() {
      var last = function last(arr) {
        return arr[arr.length - 1];
      };

      return last(last(this.years));
    }
  },
  methods: {
    getYears: function getYears(calendar) {
      var firstYear = Math.floor(calendar.getFullYear() / 10) * 10;
      var years = [];

      for (var i = 0; i < 10; i++) {
        years.push(firstYear + i);
      }

      return chunk(years, 2);
    },
    getNextCalendar: function getNextCalendar(diffYear) {
      var year = this.calendar.getFullYear();
      var month = this.calendar.getMonth();
      return createDate(year + diffYear, month);
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      this.$emit('changecalendar', this.getNextCalendar(-10), 'last-decade');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      this.$emit('changecalendar', this.getNextCalendar(10), 'next-decade');
    },
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName.toUpperCase() === 'DIV') {
        target = target.parentNode;
      }

      var year = target.getAttribute('data-year');

      if (year) {
        this.$emit('select', parseInt(year, 10));
      }
    }
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-calendar " + _vm.prefixClass + "-calendar-panel-year"
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('icon-button', {
    attrs: {
      "type": "double-left"
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }), _vm._v(" "), _c('icon-button', {
    attrs: {
      "type": "double-right"
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, [_c('span', [_vm._v(_vm._s(_vm.firstYear))]), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-decade-separator"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.lastYear))])])], 1), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-year",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l(_vm.years, function (row, i) {
    return _c('tr', {
      key: i
    }, _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell),
        attrs: {
          "data-year": cell
        }
      }, [_c('div', [_vm._v(_vm._s(cell))])]);
    }), 0);
  }), 0)])]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$4, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var CalendarPanel = {
  name: 'CalendarPanel',
  inject: {
    prefixClass: {
      default: 'mx'
    },
    dispatchDatePicker: {
      default: function _default() {
        return function () {};
      }
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    defaultPanel: {
      type: String
    },
    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: undefined
    },
    getYearPanel: {
      type: Function
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    calendar: Date,
    // update date when select year or month
    partialUpdate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var panels = ['date', 'month', 'year'];
    var index = Math.max(panels.indexOf(this.type), panels.indexOf(this.defaultPanel));
    var panel = index !== -1 ? panels[index] : 'date';
    return {
      panel: panel,
      innerCalendar: new Date()
    };
  },
  computed: {
    innerValue: function innerValue() {
      var value = Array.isArray(this.value) ? this.value : [this.value];
      var map = {
        year: startOfYear,
        month: startOfMonth,
        date: startOfDay
      };
      var start = map[this.type] || map.date;
      return value.filter(isValidDate).map(function (v) {
        return start(v);
      });
    },
    calendarYear: function calendarYear() {
      return this.innerCalendar.getFullYear();
    },
    calendarMonth: function calendarMonth() {
      return this.innerCalendar.getMonth();
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: 'initCalendar'
    },
    calendar: {
      handler: 'initCalendar'
    },
    defaultValue: {
      handler: 'initCalendar'
    }
  },
  methods: {
    initCalendar: function initCalendar() {
      var calendarDate = this.calendar;

      if (!isValidDate(calendarDate)) {
        var length = this.innerValue.length;
        calendarDate = getValidDate(length > 0 ? this.innerValue[length - 1] : this.defaultValue);
      }

      this.innerCalendar = startOfMonth(calendarDate);
    },
    isDisabled: function isDisabled(date) {
      return this.disabledDate(new Date(date), this.innerValue);
    },
    emitDate: function emitDate(date, type) {
      if (!this.isDisabled(date)) {
        this.$emit('select', date, type, this.innerValue); // someone need get the first selected date to set range value. (#429)

        this.dispatchDatePicker('pick', date, type);
      }
    },
    handleCalendarChange: function handleCalendarChange(calendar, type) {
      var oldCalendar = new Date(this.innerCalendar);
      this.innerCalendar = calendar;
      this.$emit('update:calendar', calendar);
      this.dispatchDatePicker('calendar-change', calendar, oldCalendar, type);
    },
    handelPanelChange: function handelPanelChange(panel) {
      var oldPanel = this.panel;
      this.panel = panel;
      this.dispatchDatePicker('panel-change', panel, oldPanel);
    },
    handleSelectYear: function handleSelectYear(year) {
      if (this.type === 'year') {
        var date = this.getYearCellDate(year);
        this.emitDate(date, 'year');
      } else {
        this.handleCalendarChange(createDate(year, this.calendarMonth), 'year');
        this.handelPanelChange('month');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date = new Date(this.innerValue[0]);

          _date.setFullYear(year);

          this.emitDate(_date, 'year');
        }
      }
    },
    handleSelectMonth: function handleSelectMonth(month) {
      if (this.type === 'month') {
        var date = this.getMonthCellDate(month);
        this.emitDate(date, 'month');
      } else {
        this.handleCalendarChange(createDate(this.calendarYear, month), 'month');
        this.handelPanelChange('date');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date2 = new Date(this.innerValue[0]);

          _date2.setFullYear(this.calendarYear);

          this.emitDate(setMonth(_date2, month), 'month');
        }
      }
    },
    handleSelectDate: function handleSelectDate(date) {
      this.emitDate(date, this.type === 'week' ? 'week' : 'date');
    },
    getMonthCellDate: function getMonthCellDate(month) {
      return createDate(this.calendarYear, month);
    },
    getYearCellDate: function getYearCellDate(year) {
      return createDate(year, 0);
    },
    getDateClasses: function getDateClasses(cellDate) {
      var notCurrentMonth = cellDate.getMonth() !== this.calendarMonth;
      var classes = [];

      if (cellDate.getTime() === new Date().setHours(0, 0, 0, 0)) {
        classes.push('today');
      }

      if (notCurrentMonth) {
        classes.push('not-current-month');
      }

      var state = this.getStateClass(cellDate);

      if (!(state === 'active' && notCurrentMonth)) {
        classes.push(state);
      }

      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getMonthClasses: function getMonthClasses(month) {
      if (this.type !== 'month') {
        return this.calendarMonth === month ? 'active' : '';
      }

      var classes = [];
      var cellDate = this.getMonthCellDate(month);
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getYearClasses: function getYearClasses(year) {
      if (this.type !== 'year') {
        return this.calendarYear === year ? 'active' : '';
      }

      var classes = [];
      var cellDate = this.getYearCellDate(year);
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getStateClass: function getStateClass(cellDate) {
      if (this.isDisabled(cellDate)) {
        return 'disabled';
      }

      if (this.innerValue.some(function (v) {
        return v.getTime() === cellDate.getTime();
      })) {
        return 'active';
      }

      return '';
    },
    getWeekState: function getWeekState(row) {
      if (this.type !== 'week') return '';
      var start = row[0].getTime();
      var end = row[6].getTime();
      var active = this.innerValue.some(function (v) {
        var time = v.getTime();
        return time >= start && time <= end;
      });
      return active ? "".concat(this.prefixClass, "-active-week") : '';
    }
  },
  render: function render() {
    var h = arguments[0];
    var panel = this.panel,
        innerCalendar = this.innerCalendar;

    if (panel === 'year') {
      return h(__vue_component__$6, {
        "attrs": {
          "calendar": innerCalendar,
          "getCellClasses": this.getYearClasses,
          "getYearPanel": this.getYearPanel
        },
        "on": {
          "select": this.handleSelectYear,
          "changecalendar": this.handleCalendarChange
        }
      });
    }

    if (panel === 'month') {
      return h(__vue_component__$5, {
        "attrs": {
          "calendar": innerCalendar,
          "getCellClasses": this.getMonthClasses
        },
        "on": {
          "select": this.handleSelectMonth,
          "changepanel": this.handelPanelChange,
          "changecalendar": this.handleCalendarChange
        }
      });
    }

    return h(__vue_component__$4, {
      "class": _defineProperty({}, "".concat(this.prefixClass, "-calendar-week-mode"), this.type === 'week'),
      "attrs": {
        "calendar": innerCalendar,
        "getCellClasses": this.getDateClasses,
        "getRowClasses": this.getWeekState,
        "titleFormat": this.titleFormat,
        "showWeekNumber": typeof this.showWeekNumber === 'boolean' ? this.showWeekNumber : this.type === 'week'
      },
      "on": {
        "select": this.handleSelectDate,
        "changepanel": this.handelPanelChange,
        "changecalendar": this.handleCalendarChange
      }
    });
  }
};

var CalendarRange = {
  name: 'CalendarRange',
  components: {
    CalendarPanel: CalendarPanel
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, CalendarPanel.props),
  data: function data() {
    return {
      innerValue: [],
      calendars: []
    };
  },
  computed: {
    // Minimum difference between start and end calendars
    calendarMinDiff: function calendarMinDiff() {
      var map = {
        date: 1,
        // type:date  min 1 month
        month: 1 * 12,
        // type:month min 1 year
        year: 10 * 12 // type:year  min 10 year

      };
      return map[this.type] || map.date;
    },
    calendarMaxDiff: function calendarMaxDiff() {
      return Infinity;
    },
    defaultValues: function defaultValues() {
      return Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        this.innerValue = isValidRangeDate(this.value) ? this.value : [new Date(NaN), new Date(NaN)];
        var calendars = this.innerValue.map(function (v, i) {
          return startOfMonth(getValidDate(v, _this.defaultValues[i]));
        });
        this.updateCalendars(calendars);
      }
    }
  },
  methods: {
    handleSelect: function handleSelect(date, type) {
      var _this$innerValue = _slicedToArray(this.innerValue, 2),
          startValue = _this$innerValue[0],
          endValue = _this$innerValue[1];

      if (isValidDate(startValue) && !isValidDate(endValue)) {
        if (startValue.getTime() > date.getTime()) {
          this.innerValue = [date, startValue];
        } else {
          this.innerValue = [startValue, date];
        }

        this.emitDate(this.innerValue, type);
      } else {
        this.innerValue = [date, new Date(NaN)];
      }
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    updateStartCalendar: function updateStartCalendar(value) {
      this.updateCalendars([value, this.calendars[1]], 1);
    },
    updateEndCalendar: function updateEndCalendar(value) {
      this.updateCalendars([this.calendars[0], value], 0);
    },
    updateCalendars: function updateCalendars(calendars) {
      var adjustIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var gap = this.getCalendarGap(calendars);

      if (gap) {
        var calendar = new Date(calendars[adjustIndex]);
        calendar.setMonth(calendar.getMonth() + (adjustIndex === 0 ? -gap : gap));
        calendars[adjustIndex] = calendar;
      }

      this.calendars = calendars;
    },
    getCalendarGap: function getCalendarGap(calendars) {
      var _calendars = _slicedToArray(calendars, 2),
          calendarLeft = _calendars[0],
          calendarRight = _calendars[1];

      var yearDiff = calendarRight.getFullYear() - calendarLeft.getFullYear();
      var monthDiff = calendarRight.getMonth() - calendarLeft.getMonth();
      var diff = yearDiff * 12 + monthDiff;
      var min = this.calendarMinDiff;
      var max = this.calendarMaxDiff;

      if (diff < min) {
        return min - diff;
      }

      if (diff > max) {
        return max - diff;
      }

      return 0;
    },
    getRangeClasses: function getRangeClasses(cellDate, currentDates, classnames) {
      var classes = [].concat(this.getClasses(cellDate, currentDates, classnames));

      if (!/disabled|active|not-current-month/.test(classnames) && currentDates.length === 2 && cellDate.getTime() > currentDates[0].getTime() && cellDate.getTime() < currentDates[1].getTime()) {
        classes.push('in-range');
      }

      return classes;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var calendarRange = this.calendars.map(function (calendar, index) {
      var props = _objectSpread2({}, _this2.$props, {
        calendar: calendar,
        value: _this2.innerValue,
        defaultValue: _this2.defaultValues[index],
        getClasses: _this2.getRangeClasses,
        // don't update when range is true
        partialUpdate: false
      });

      var on = {
        select: _this2.handleSelect,
        'update:calendar': index === 0 ? _this2.updateStartCalendar : _this2.updateEndCalendar
      };
      return h("calendar-panel", {
        "props": _objectSpread2({}, props),
        "on": _objectSpread2({}, on)
      });
    });
    var prefixClass = this.prefixClass;
    return h("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [calendarRange]);
  }
};

var scrollBarWidth;
function getScrollbarWidth () {
  if (typeof window === 'undefined') return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  scrollBarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollBarWidth;
}

//
var script$5 = {
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  data: function data() {
    return {
      scrollbarWidth: 0,
      thumbTop: '',
      thumbHeight: ''
    };
  },
  created: function created() {
    this.scrollbarWidth = getScrollbarWidth();
    document.addEventListener('mouseup', this.handleDragend);
  },
  beforeDestroy: function beforeDestroy() {
    document.addEventListener('mouseup', this.handleDragend);
  },
  mounted: function mounted() {
    this.$nextTick(this.getThumbSize);
  },
  methods: {
    getThumbSize: function getThumbSize() {
      var wrap = this.$refs.wrap;
      if (!wrap) return;
      var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      this.thumbHeight = heightPercentage < 100 ? "".concat(heightPercentage, "%") : '';
    },
    handleScroll: function handleScroll(evt) {
      var el = evt.currentTarget;
      var scrollHeight = el.scrollHeight,
          scrollTop = el.scrollTop;
      this.thumbTop = "".concat(scrollTop * 100 / scrollHeight, "%");
    },
    handleDragstart: function handleDragstart(evt) {
      evt.stopImmediatePropagation();
      this._draggable = true;
      var offsetTop = this.$refs.thumb.offsetTop;
      this._prevY = evt.clientY - offsetTop;
      document.addEventListener('mousemove', this.handleDraging);
    },
    handleDraging: function handleDraging(evt) {
      if (!this._draggable) return;
      var clientY = evt.clientY;
      var wrap = this.$refs.wrap;
      var scrollHeight = wrap.scrollHeight,
          clientHeight = wrap.clientHeight;
      var offsetY = clientY - this._prevY;
      var top = offsetY * scrollHeight / clientHeight;
      wrap.scrollTop = top;
    },
    handleDragend: function handleDragend() {
      if (this._draggable) {
        this._draggable = false;
        document.removeEventListener('mousemove', this.handleDraging);
      }
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-scrollbar",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, [_c('div', {
    ref: "wrap",
    class: _vm.prefixClass + "-scrollbar-wrap",
    style: {
      marginRight: "-" + _vm.scrollbarWidth + "px"
    },
    on: {
      "scroll": _vm.handleScroll
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-scrollbar-track"
  }, [_c('div', {
    ref: "thumb",
    class: _vm.prefixClass + "-scrollbar-thumb",
    style: {
      height: _vm.thumbHeight,
      top: _vm.thumbTop
    },
    on: {
      "mousedown": _vm.handleDragstart
    }
  })])]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$5, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

//

var padNumber = function padNumber(value) {
  value = parseInt(value, 10);
  return value < 10 ? "0".concat(value) : "".concat(value);
};

var generateOptions = function generateOptions(length, step, options) {
  if (Array.isArray(options)) {
    return options.filter(function (v) {
      return v >= 0 && v < length;
    });
  }

  if (step <= 0) {
    step = 1;
  }

  var arr = [];

  for (var i = 0; i < length; i += step) {
    arr.push(i);
  }

  return arr;
};

var scrollTo = function scrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  // jump to target if duration zero
  if (duration <= 0) {
    requestAnimationFrame(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var tick = difference / duration * 10;
  requestAnimationFrame(function () {
    var scrollTop = element.scrollTop + tick;

    if (scrollTop >= to) {
      element.scrollTop = to;
      return;
    }

    element.scrollTop = scrollTop;
    scrollTo(element, to, duration - 10);
  });
};

var script$6 = {
  name: 'ListColumns',
  components: {
    ScrollbarVertical: __vue_component__$7
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    scrollDuration: {
      type: Number,
      default: 100
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    showHour: {
      type: Boolean,
      default: true
    },
    showMinute: {
      type: Boolean,
      default: true
    },
    showSecond: {
      type: Boolean,
      default: true
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    use12h: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columns: function columns() {
      var cols = [];
      if (this.showHour) cols.push({
        type: 'hour',
        list: this.getHoursList()
      });
      if (this.showMinute) cols.push({
        type: 'minute',
        list: this.getMinutesList()
      });
      if (this.showSecond) cols.push({
        type: 'second',
        list: this.getSecondsList()
      });
      if (this.use12h) cols.push({
        type: 'ampm',
        list: this.getAMPMList()
      });
      return cols.filter(function (v) {
        return v.list.length > 0;
      });
    }
  },
  watch: {
    date: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.scrollToSelected(_this.scrollDuration);
        });
      }
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(0);
  },
  methods: {
    getHoursList: function getHoursList() {
      var _this2 = this;

      return generateOptions(this.use12h ? 12 : 24, this.hourStep, this.hourOptions).map(function (num) {
        var date = new Date(_this2.date);
        var text = padNumber(num);

        if (_this2.use12h) {
          if (num === 0) {
            text = '12';
          }

          if (date.getHours() >= 12) {
            num += 12;
          }
        }

        var value = date.setHours(num);
        return {
          value: value,
          text: text
        };
      });
    },
    getMinutesList: function getMinutesList() {
      var _this3 = this;

      return generateOptions(60, this.minuteStep, this.minuteOptions).map(function (num) {
        var value = new Date(_this3.date).setMinutes(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getSecondsList: function getSecondsList() {
      var _this4 = this;

      return generateOptions(60, this.secondStep, this.secondOptions).map(function (num) {
        var value = new Date(_this4.date).setSeconds(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getAMPMList: function getAMPMList() {
      var _this5 = this;

      return ['AM', 'PM'].map(function (text, i) {
        var date = new Date(_this5.date);
        var value = date.setHours(date.getHours() % 12 + i * 12);
        return {
          text: text,
          value: value
        };
      });
    },
    scrollToSelected: function scrollToSelected(duration) {
      var elements = this.$el.querySelectorAll('.active');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var scrollElement = getScrollParent(element, this.$el);

        if (scrollElement) {
          var to = element.offsetTop;
          scrollTo(scrollElement, to, duration);
        }
      }
    },
    handleSelect: function handleSelect(evt) {
      var target = evt.target,
          currentTarget = evt.currentTarget;
      if (target.tagName.toUpperCase() !== 'LI') return;
      var type = currentTarget.getAttribute('data-type');
      var colIndex = parseInt(currentTarget.getAttribute('data-index'), 10);
      var cellIndex = parseInt(target.getAttribute('data-index'), 10);
      var value = this.columns[colIndex].list[cellIndex].value;
      this.$emit('select', value, type);
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-time-columns"
  }, _vm._l(_vm.columns, function (col, i) {
    return _c('scrollbar-vertical', {
      key: i,
      class: _vm.prefixClass + "-time-column"
    }, [_c('ul', {
      class: _vm.prefixClass + "-time-list",
      attrs: {
        "data-type": col.type,
        "data-index": i
      },
      on: {
        "click": _vm.handleSelect
      }
    }, _vm._l(col.list, function (item, j) {
      return _c('li', {
        key: item.value,
        class: [_vm.prefixClass + "-time-item", _vm.getClasses(item.value)],
        attrs: {
          "data-index": j
        }
      }, [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]);
    }), 0)]);
  }), 1);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$6, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

//

function parseOption() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var values = time.split(':');

  if (values.length >= 2) {
    var hours = parseInt(values[0], 10);
    var minutes = parseInt(values[1], 10);
    return {
      hours: hours,
      minutes: minutes
    };
  }

  return null;
}

var scrollTo$1 = function scrollTo(element, to) {
  if (element) {
    element.scrollTop = to;
  }
};

var script$7 = {
  name: 'ListOptions',
  components: {
    ScrollbarVertical: __vue_component__$7
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    options: {
      type: [Object, Function],
      default: function _default() {
        return [];
      }
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    list: function list() {
      var result = [];
      var options = this.options;

      if (typeof options === 'function') {
        return options() || [];
      }

      var start = parseOption(options.start);
      var end = parseOption(options.end);
      var step = parseOption(options.step);
      var fmt = options.format || this.format;

      if (start && end && step) {
        var startMinutes = start.minutes + start.hours * 60;
        var endMinutes = end.minutes + end.hours * 60;
        var stepMinutes = step.minutes + step.hours * 60;
        var len = Math.floor((endMinutes - startMinutes) / stepMinutes);

        for (var i = 0; i <= len; i++) {
          var timeMinutes = startMinutes + i * stepMinutes;
          var hours = Math.floor(timeMinutes / 60);
          var minutes = timeMinutes % 60;
          var value = new Date(this.date).setHours(hours, minutes, 0);
          result.push({
            value: value,
            text: this.formatDate(value, fmt)
          });
        }
      }

      return result;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected();
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_0__["format"])(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    scrollToSelected: function scrollToSelected() {
      var element = this.$el.querySelector('.active');
      if (!element) return;
      var scrollElement = getScrollParent(element, this.$el);
      if (!scrollElement) return;
      var to = element.offsetTop;
      scrollTo$1(scrollElement, to);
    },
    handleSelect: function handleSelect(value) {
      this.$emit('select', value, 'time');
    }
  }
};

/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('scrollbar-vertical', _vm._l(_vm.list, function (item) {
    return _c('div', {
      key: item.value,
      class: [_vm.prefixClass + "-time-option", _vm.getClasses(item.value)],
      on: {
        "click": function click($event) {
          return _vm.handleSelect(item.value);
        }
      }
    }, [_vm._v("\n    " + _vm._s(item.text) + "\n  ")]);
  }), 0);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$7, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

//
var script$8 = {
  name: 'TimePanel',
  components: {
    ListColumns: __vue_component__$8,
    ListOptions: __vue_component__$9
  },
  inject: {
    getLocale: {
      default: function _default() {
        return getLocale;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    format: {
      default: 'HH:mm:ss'
    },
    timeTitleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    showTimeHeader: {
      type: Boolean,
      default: false
    },
    disabledTime: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    timePickerOptions: {
      type: [Object, Function],
      default: function _default() {
        return null;
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    showHour: {
      type: Boolean,
      default: undefined
    },
    showMinute: {
      type: Boolean,
      default: undefined
    },
    showSecond: {
      type: Boolean,
      default: undefined
    },
    use12h: {
      type: Boolean,
      default: undefined
    },
    scrollDuration: {
      type: Number,
      default: 100
    }
  },
  computed: {
    innerValue: function innerValue() {
      return getValidDate(this.value, this.defaultValue);
    },
    title: function title() {
      var titleFormat = this.timeTitleFormat;
      var date = new Date(this.innerValue);
      return this.formatDate(date, titleFormat);
    },
    innerForamt: function innerForamt() {
      return typeof this.format === 'string' ? this.format : 'HH:mm:ss';
    },
    ShowHourMinuteSecondAMPM: function ShowHourMinuteSecondAMPM() {
      var _this = this;

      var fmt = this.innerForamt;
      var defaultProps = {
        showHour: /[HhKk]/.test(fmt),
        showMinute: /m/.test(fmt),
        showSecond: /s/.test(fmt),
        use12h: /a/i.test(fmt)
      };
      var obj = {};
      Object.keys(defaultProps).forEach(function (key) {
        obj[key] = typeof _this[key] === 'boolean' ? _this[key] : defaultProps[key];
      });
      return obj;
    }
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_0__["format"])(date, fmt, {
        locale: this.getLocale().formatLocale
      });
    },
    isDisabled: function isDisabled(date) {
      return this.disabledTime(new Date(date));
    },
    handleSelect: function handleSelect(value, type) {
      var date = new Date(value);

      if (!this.isDisabled(value)) {
        this.$emit('select', date, type);
      }
    },
    handleClickTitle: function handleClickTitle() {
      this.$emit('clicktitle');
    },
    getClasses: function getClasses(value) {
      var cellDate = new Date(value);

      if (this.isDisabled(value)) {
        return 'disabled';
      }

      if (cellDate.getTime() === this.innerValue.getTime()) {
        return 'active';
      }

      return '';
    }
  }
};

/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-time"
  }, [_vm.showTimeHeader ? _c('div', {
    class: _vm.prefixClass + "-time-header"
  }, [_c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-time-header-title",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleClickTitle
    }
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-time-content"
  }, [_vm.timePickerOptions ? _c('list-options', {
    attrs: {
      "date": _vm.innerValue,
      "get-classes": _vm.getClasses,
      "options": _vm.timePickerOptions,
      "format": _vm.innerForamt
    },
    on: {
      "select": _vm.handleSelect
    }
  }) : _c('list-columns', _vm._b({
    attrs: {
      "date": _vm.innerValue,
      "get-classes": _vm.getClasses,
      "hour-options": _vm.hourOptions,
      "minute-options": _vm.minuteOptions,
      "second-options": _vm.secondOptions,
      "hour-step": _vm.hourStep,
      "minute-step": _vm.minuteStep,
      "second-step": _vm.secondStep,
      "scroll-duration": _vm.scrollDuration
    },
    on: {
      "select": _vm.handleSelect
    }
  }, 'list-columns', _vm.ShowHourMinuteSecondAMPM, false))], 1)]);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$8, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

var TimeRange = {
  name: 'TimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, __vue_component__$a.props),
  data: function data() {
    return {
      startValue: new Date(NaN),
      endValue: new Date(NaN)
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        if (isValidRangeDate(this.value)) {
          var _this$value = _slicedToArray(this.value, 2),
              startValue = _this$value[0],
              endValue = _this$value[1];

          this.startValue = startValue;
          this.endValue = endValue;
        } else {
          this.startValue = new Date(NaN);
          this.endValue = new Date(NaN);
        }
      }
    }
  },
  methods: {
    emitChange: function emitChange(type, index) {
      var date = [this.startValue, this.endValue];
      this.$emit('select', date, type === 'time' ? 'time-range' : type, index);
    },
    handleSelectStart: function handleSelectStart(date, type) {
      this.startValue = date; // check the NaN

      if (!(this.endValue.getTime() >= date.getTime())) {
        this.endValue = date;
      }

      this.emitChange(type, 0);
    },
    handleSelectEnd: function handleSelectEnd(date, type) {
      // check the NaN
      this.endValue = date;

      if (!(this.startValue.getTime() <= date.getTime())) {
        this.startValue = date;
      }

      this.emitChange(type, 1);
    },
    disabledStartTime: function disabledStartTime(date) {
      return this.disabledTime(date, 0);
    },
    disabledEndTime: function disabledEndTime(date) {
      return date.getTime() < this.startValue.getTime() || this.disabledTime(date, 1);
    }
  },
  render: function render() {
    var h = arguments[0];
    var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    var prefixClass = this.prefixClass;
    return h("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [h(__vue_component__$a, {
      "props": _objectSpread2({}, _objectSpread2({}, this.$props, {
        value: this.startValue,
        defaultValue: defaultValues[0],
        disabledTime: this.disabledStartTime
      })),
      "on": _objectSpread2({}, _objectSpread2({}, this.$listeners, {
        select: this.handleSelectStart
      }))
    }), h(__vue_component__$a, {
      "props": _objectSpread2({}, _objectSpread2({}, this.$props, {
        value: this.endValue,
        defaultValue: defaultValues[1],
        disabledTime: this.disabledEndTime
      })),
      "on": _objectSpread2({}, _objectSpread2({}, this.$listeners, {
        select: this.handleSelectEnd
      }))
    })]);
  }
};

var DatetimePanel = {
  name: 'DatetimePanel',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  emits: ['select', 'update:show-time-panel'],
  props: _objectSpread2({}, CalendarPanel.props, {}, __vue_component__$a.props, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    defaultTimeVisible: function defaultTimeVisible(val) {
      this.$emit('update:show-time-panel', val);
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
    },
    emitDate: function emitDate(date, type) {
      this.$emit('select', date, type);
    },
    handleSelect: function handleSelect(date, type) {
      if (type === 'date') {
        this.openTimePanel();
      }

      var datetime = assignTime(date, getValidDate(this.value, this.defaultValue));

      if (this.disabledTime(new Date(datetime))) {
        // set the time of defalutValue;
        datetime = assignTime(date, this.defaultValue);

        if (this.disabledTime(new Date(datetime))) {
          // if disabled don't emit date
          this.currentValue = datetime;
          return;
        }
      }

      this.emitDate(datetime, type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var calendarProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(CalendarPanel.props)), {
        type: 'date',
        value: this.currentValue
      }),
      on: {
        select: this.handleSelect
      }
    };
    var timeProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(__vue_component__$a.props)), {
        showTimeHeader: true,
        value: this.currentValue
      }),
      on: {
        select: this.emitDate,
        clicktitle: this.closeTimePanel
      }
    };
    var prefixClass = this.prefixClass;
    return h("div", [h(CalendarPanel, helper([{}, calendarProps])), this.timeVisible && h(__vue_component__$a, helper([{
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps]))]);
  }
};

var DatetimeRange = {
  name: 'DatetimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  emits: ['select', 'update:show-time-panel'],
  props: _objectSpread2({}, CalendarRange.props, {}, TimeRange.props, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    },
    defaultTimeVisible: function defaultTimeVisible(val) {
      this.$emit('update:show-time-panel', val);
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    handleSelect: function handleSelect(dates, type) {
      var _this = this;

      if (type === 'date') {
        this.openTimePanel();
      }

      var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
      var datetimes = dates.map(function (date, i) {
        var time = isValidRangeDate(_this.value) ? _this.value[i] : defaultValues[i];
        return assignTime(date, time);
      });

      if (datetimes[1].getTime() < datetimes[0].getTime()) {
        datetimes = [datetimes[0], datetimes[0]];
      }

      if (datetimes.some(this.disabledTime)) {
        datetimes = dates.map(function (date, i) {
          return assignTime(date, defaultValues[i]);
        });

        if (datetimes.some(this.disabledTime)) {
          this.currentValue = datetimes;
          return;
        }
      }

      this.emitDate(datetimes, type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var calendarProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(CalendarRange.props)), {
        type: 'date',
        value: this.currentValue
      }),
      on: {
        select: this.handleSelect
      }
    };
    var timeProps = {
      props: _objectSpread2({}, pick(this.$props, Object.keys(TimeRange.props)), {
        value: this.currentValue,
        showTimeHeader: true
      }),
      on: {
        select: this.emitDate,
        clicktitle: this.closeTimePanel
      }
    };
    var prefixClass = this.prefixClass;
    return h("div", [h(CalendarRange, helper([{}, calendarProps])), this.timeVisible && h(TimeRange, helper([{
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps]))]);
  }
};

var componentMap = {
  default: CalendarPanel,
  time: __vue_component__$a,
  datetime: DatetimePanel
};
var componentRangeMap = {
  default: CalendarRange,
  time: TimeRange,
  datetime: DatetimeRange
};
var DatePicker = {
  name: 'DatePicker',
  provide: function provide() {
    var _this = this;

    return {
      // make locale reactive
      getLocale: function getLocale() {
        return _this.locale;
      },
      getWeek: this.getWeek,
      prefixClass: this.prefixClass,
      dispatchDatePicker: this.$emit.bind(this)
    };
  },
  props: _objectSpread2({}, DatetimePanel.props, {
    value: {},
    valueType: {
      type: String,
      default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'

    },
    type: {
      type: String,
      // ['date', 'datetime', 'time', 'year', 'month', 'week']
      default: 'date'
    },
    format: {
      type: String
    },
    formatter: {
      type: Object
    },
    range: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String
    },
    lang: {
      type: [String, Object]
    },
    placeholder: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    prefixClass: {
      type: String,
      default: 'mx'
    },
    inputClass: {},
    inputAttr: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: undefined
    },
    popupClass: {},
    popupStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: 'OK'
    },
    renderInputText: {
      type: Function
    },
    shortcuts: {
      type: Array,
      validator: function validator(value) {
        return Array.isArray(value) && value.every(function (v) {
          return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';
        });
      },
      default: function _default() {
        return [];
      }
    }
  }),
  data: function data() {
    return {
      // cache the innervalue, wait to confirm
      currentValue: null,
      userInput: null,
      defaultOpen: false
    };
  },
  computed: {
    popupVisible: function popupVisible() {
      return !this.disabled && (typeof this.open === 'boolean' ? this.open : this.defaultOpen);
    },
    innerRangeSeparator: function innerRangeSeparator() {
      return this.rangeSeparator || (this.multiple ? ',' : ' ~ ');
    },
    innerFormat: function innerFormat() {
      var map = {
        date: 'YYYY-MM-DD',
        datetime: 'YYYY-MM-DD HH:mm:ss',
        year: 'YYYY',
        month: 'YYYY-MM',
        time: 'HH:mm:ss',
        week: 'w'
      };
      return this.format || map[this.type] || map.date;
    },
    innerValue: function innerValue() {
      var value = this.value;

      if (this.validMultipleType) {
        value = Array.isArray(value) ? value : [];
        return value.map(this.value2date);
      }

      if (this.range) {
        value = Array.isArray(value) ? value.slice(0, 2) : [null, null];
        return value.map(this.value2date);
      }

      return this.value2date(value);
    },
    text: function text() {
      var _this2 = this;

      if (this.userInput !== null) {
        return this.userInput;
      }

      if (typeof this.renderInputText === 'function') {
        return this.renderInputText(this.innerValue);
      }

      if (!this.isValidValue(this.innerValue)) {
        return '';
      }

      if (Array.isArray(this.innerValue)) {
        return this.innerValue.map(function (v) {
          return _this2.formatDate(v);
        }).join(this.innerRangeSeparator);
      }

      return this.formatDate(this.innerValue);
    },
    showClearIcon: function showClearIcon() {
      return !this.disabled && this.clearable && this.text;
    },
    locale: function locale() {
      if (isObject(this.lang)) {
        return mergeDeep(getLocale(), this.lang);
      }

      return getLocale(this.lang);
    },
    validMultipleType: function validMultipleType() {
      var types = ['date', 'month', 'year'];
      return this.multiple && !this.range && types.indexOf(this.type) !== -1;
    }
  },
  watch: {
    innerValue: {
      immediate: true,
      handler: function handler(val) {
        this.currentValue = val;
      }
    }
  },
  created: function created() {
    if (_typeof(this.format) === 'object') {
      console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it");
    }
  },
  methods: {
    handleClickOutSide: function handleClickOutSide(evt) {
      var target = evt.target;

      if (!this.$el.contains(target)) {
        this.closePopup();
      }
    },
    getFormatter: function getFormatter(key) {
      return isObject(this.formatter) && this.formatter[key] || isObject(this.format) && this.format[key];
    },
    getWeek: function getWeek$1(date, options) {
      if (typeof this.getFormatter('getWeek') === 'function') {
        return this.getFormatter('getWeek')(date, options);
      }

      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_0__["getWeek"])(date, options);
    },
    parseDate: function parseDate(value, fmt) {
      fmt = fmt || this.innerFormat;

      if (typeof this.getFormatter('parse') === 'function') {
        return this.getFormatter('parse')(value, fmt);
      }

      var backupDate = new Date();
      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_0__["parse"])(value, fmt, {
        locale: this.locale.formatLocale,
        backupDate: backupDate
      });
    },
    formatDate: function formatDate(date, fmt) {
      fmt = fmt || this.innerFormat;

      if (typeof this.getFormatter('stringify') === 'function') {
        return this.getFormatter('stringify')(date, fmt);
      }

      return Object(date_format_parse__WEBPACK_IMPORTED_MODULE_0__["format"])(date, fmt, {
        locale: this.locale.formatLocale
      });
    },
    // transform the outer value to inner date
    value2date: function value2date(value) {
      switch (this.valueType) {
        case 'date':
          return value instanceof Date ? new Date(value.getTime()) : new Date(NaN);

        case 'timestamp':
          return typeof value === 'number' ? new Date(value) : new Date(NaN);

        case 'format':
          return typeof value === 'string' ? this.parseDate(value) : new Date(NaN);

        default:
          return typeof value === 'string' ? this.parseDate(value, this.valueType) : new Date(NaN);
      }
    },
    // transform the inner date to outer value
    date2value: function date2value(date) {
      if (!isValidDate(date)) return null;

      switch (this.valueType) {
        case 'date':
          return date;

        case 'timestamp':
          return date.getTime();

        case 'format':
          return this.formatDate(date);

        default:
          return this.formatDate(date, this.valueType);
      }
    },
    emitValue: function emitValue(date, type) {
      // fix IE11/10 trigger input event when input is focused. (placeholder !== '')
      this.userInput = null;
      var value = Array.isArray(date) ? date.map(this.date2value) : this.date2value(date);
      this.$emit('input', value);
      this.$emit('change', value, type);
      this.afterEmitValue(type);
      return value;
    },
    afterEmitValue: function afterEmitValue(type) {
      // this.type === 'datetime', click the time should close popup
      if (!type || type === this.type || type === 'time') {
        this.closePopup();
      }
    },
    isValidValue: function isValidValue(value) {
      if (this.validMultipleType) {
        return isValidDates(value);
      }

      if (this.range) {
        return isValidRangeDate(value);
      }

      return isValidDate(value);
    },
    isValidValueAndNotDisabled: function isValidValueAndNotDisabled(value) {
      if (!this.isValidValue(value)) {
        return false;
      }

      var disabledDate = typeof this.disabledDate === 'function' ? this.disabledDate : function () {
        return false;
      };
      var disabledTime = typeof this.disabledTime === 'function' ? this.disabledTime : function () {
        return false;
      };

      if (!Array.isArray(value)) {
        value = [value];
      }

      return value.every(function (v) {
        return !disabledDate(v) && !disabledTime(v);
      });
    },
    handleMultipleDates: function handleMultipleDates(date, dates) {
      if (this.validMultipleType && dates) {
        var nextDates = dates.filter(function (v) {
          return v.getTime() !== date.getTime();
        });

        if (nextDates.length === dates.length) {
          nextDates.push(date);
        }

        return nextDates;
      }

      return date;
    },
    handleSelectDate: function handleSelectDate(val, type, dates) {
      val = this.handleMultipleDates(val, dates);

      if (this.confirm) {
        this.currentValue = val;
      } else {
        this.emitValue(val, this.validMultipleType ? "multiple-".concat(type) : type);
      }
    },
    clear: function clear() {
      this.emitValue(this.range ? [null, null] : null);
      this.$emit('clear');
    },
    handleClear: function handleClear(evt) {
      evt.stopPropagation();
      this.clear();
    },
    handleConfirmDate: function handleConfirmDate() {
      var value = this.emitValue(this.currentValue);
      this.$emit('confirm', value);
    },
    handleSelectShortcut: function handleSelectShortcut(evt) {
      var index = evt.currentTarget.getAttribute('data-index');
      var item = this.shortcuts[parseInt(index, 10)];

      if (isObject(item) && typeof item.onClick === 'function') {
        var date = item.onClick(this);

        if (date) {
          this.emitValue(date);
        }
      }
    },
    openPopup: function openPopup(evt) {
      if (this.popupVisible) return;
      this.defaultOpen = true;
      this.$emit('open', evt);
      this.$emit('update:open', true);
    },
    closePopup: function closePopup() {
      if (!this.popupVisible) return;
      this.defaultOpen = false;
      this.$emit('close');
      this.$emit('update:open', false);
    },
    blur: function blur() {
      // when use slot input
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    handleInputChange: function handleInputChange() {
      var _this3 = this;

      if (!this.editable || this.userInput === null) return;
      var text = this.userInput.trim();
      this.userInput = null;

      if (text === '') {
        this.clear();
        return;
      }

      var date;

      if (this.validMultipleType) {
        date = text.split(this.innerRangeSeparator).map(function (v) {
          return _this3.parseDate(v.trim());
        });
      } else if (this.range) {
        var arr = text.split(this.innerRangeSeparator);

        if (arr.length !== 2) {
          // Maybe the separator during the day is the same as the separator for the date
          // eg: 2019-10-09-2020-01-02
          arr = text.split(this.innerRangeSeparator.trim());
        }

        date = arr.map(function (v) {
          return _this3.parseDate(v.trim());
        });
      } else {
        date = this.parseDate(text);
      }

      if (this.isValidValueAndNotDisabled(date)) {
        this.emitValue(date);
        this.blur();
      } else {
        this.$emit('input-error', text);
      }
    },
    handleInputInput: function handleInputInput(evt) {
      // slot input v-model
      this.userInput = typeof evt === 'string' ? evt : evt.target.value;
    },
    handleInputKeydown: function handleInputKeydown(evt) {
      var keyCode = evt.keyCode; // Tab 9 or Enter 13

      if (keyCode === 9) {
        this.closePopup();
      } else if (keyCode === 13) {
        this.handleInputChange();
      }
    },
    handleInputBlur: function handleInputBlur(evt) {
      // tab close
      this.$emit('blur', evt);
    },
    handleInputFocus: function handleInputFocus(evt) {
      this.openPopup(evt);
      this.$emit('focus', evt);
    },
    hasSlot: function hasSlot(name) {
      return !!(this.$slots[name] || this.$scopedSlots[name]);
    },
    renderSlot: function renderSlot(name, fallback, props) {
      var slotFn = this.$scopedSlots[name];

      if (slotFn) {
        return slotFn(props) || fallback;
      }

      return this.$slots[name] || fallback;
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var prefixClass = this.prefixClass;

      var props = _objectSpread2({
        name: 'date',
        type: 'text',
        autocomplete: 'off',
        value: this.text,
        class: this.inputClass || "".concat(this.prefixClass, "-input"),
        readonly: !this.editable,
        disabled: this.disabled,
        placeholder: this.placeholder
      }, this.inputAttr);

      var value = props.value,
          className = props.class,
          attrs = _objectWithoutProperties(props, ["value", "class"]);

      var events = {
        keydown: this.handleInputKeydown,
        focus: this.handleInputFocus,
        blur: this.handleInputBlur,
        input: this.handleInputInput,
        change: this.handleInputChange
      };
      var input = this.renderSlot('input', h("input", {
        "domProps": {
          "value": value
        },
        "class": className,
        "attrs": _objectSpread2({}, attrs),
        "on": _objectSpread2({}, events),
        "ref": "input"
      }), {
        props: props,
        events: events
      });
      return h("div", {
        "class": "".concat(prefixClass, "-input-wrapper"),
        "on": {
          "mousedown": this.openPopup
        }
      }, [input, this.showClearIcon ? h("i", {
        "class": "".concat(prefixClass, "-icon-clear"),
        "on": {
          "mousedown": this.handleClear
        }
      }, [this.renderSlot('icon-clear', h(__vue_component__$2))]) : null, h("i", {
        "class": "".concat(prefixClass, "-icon-calendar")
      }, [this.renderSlot('icon-calendar', h(__vue_component__$1))])]);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var map = this.range ? componentRangeMap : componentMap;
      var Component = map[this.type] || map.default;

      var props = _objectSpread2({}, pick(this.$props, Object.keys(Component.props)), {
        value: this.currentValue
      });

      var on = _objectSpread2({}, pick(this.$listeners, Component.emits || []), {
        select: this.handleSelectDate
      });

      var content = h(Component, helper([{}, {
        props: props,
        on: on,
        ref: 'picker'
      }]));
      return h("div", {
        "class": "".concat(this.prefixClass, "-datepicker-body")
      }, [this.renderSlot('content', content, {
        value: this.currentValue,
        emit: this.handleSelectDate
      })]);
    },
    renderSidebar: function renderSidebar() {
      var _this4 = this;

      var h = this.$createElement;
      var prefixClass = this.prefixClass;
      return h("div", {
        "class": "".concat(prefixClass, "-datepicker-sidebar")
      }, [this.renderSlot('sidebar', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      }), this.shortcuts.map(function (v, i) {
        return h("button", {
          "key": i,
          "attrs": {
            "data-index": i,
            "type": "button"
          },
          "class": "".concat(prefixClass, "-btn ").concat(prefixClass, "-btn-text ").concat(prefixClass, "-btn-shortcut"),
          "on": {
            "click": _this4.handleSelectShortcut
          }
        }, [v.text]);
      })]);
    },
    renderHeader: function renderHeader() {
      var h = this.$createElement;
      return h("div", {
        "class": "".concat(this.prefixClass, "-datepicker-header")
      }, [this.renderSlot('header', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      })]);
    },
    renderFooter: function renderFooter() {
      var h = this.$createElement;
      var prefixClass = this.prefixClass;
      return h("div", {
        "class": "".concat(prefixClass, "-datepicker-footer")
      }, [this.renderSlot('footer', null, {
        value: this.currentValue,
        emit: this.handleSelectDate
      }), this.confirm ? h("button", {
        "attrs": {
          "type": "button"
        },
        "class": "".concat(prefixClass, "-btn ").concat(prefixClass, "-datepicker-btn-confirm"),
        "on": {
          "click": this.handleConfirmDate
        }
      }, [this.confirmText]) : null]);
    }
  },
  render: function render() {
    var _class;

    var h = arguments[0];
    var prefixClass = this.prefixClass,
        inline = this.inline,
        disabled = this.disabled;
    var sidedar = this.hasSlot('sidebar') || this.shortcuts.length ? this.renderSidebar() : null;
    var content = h("div", {
      "class": "".concat(prefixClass, "-datepicker-content")
    }, [this.hasSlot('header') ? this.renderHeader() : null, this.renderContent(), this.hasSlot('footer') || this.confirm ? this.renderFooter() : null]);
    return h("div", {
      "class": (_class = {}, _defineProperty(_class, "".concat(prefixClass, "-datepicker"), true), _defineProperty(_class, "".concat(prefixClass, "-datepicker-range"), this.range), _defineProperty(_class, "".concat(prefixClass, "-datepicker-inline"), inline), _defineProperty(_class, "disabled", disabled), _class)
    }, [!inline ? this.renderInput() : null, !inline ? h(__vue_component__, {
      "ref": "popup",
      "class": this.popupClass,
      "style": this.popupStyle,
      "attrs": {
        "visible": this.popupVisible,
        "appendToBody": this.appendToBody
      },
      "on": {
        "clickoutside": this.handleClickOutSide
      }
    }, [sidedar, content]) : h("div", {
      "class": "".concat(prefixClass, "-datepicker-main")
    }, [sidedar, content])]);
  }
};

DatePicker.locale = locale;

DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

if (typeof window !== 'undefined' && window.Vue) {
  DatePicker.install(window.Vue);
}

_extends(DatePicker, {
  CalendarPanel: CalendarPanel,
  CalendarRange: CalendarRange,
  TimePanel: __vue_component__$a,
  TimeRange: TimeRange,
  DatetimePanel: DatetimePanel,
  DatetimeRange: DatetimeRange
});

/* harmony default export */ __webpack_exports__["default"] = (DatePicker);


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.6.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  Store: Store,
  install: install,
  version: '3.6.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/App */ "./resources/js/views/App.vue");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! izitoast */ "./node_modules/izitoast/dist/js/iziToast.js");
/* harmony import */ var izitoast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(izitoast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! izitoast/dist/css/iziToast.min.css */ "./node_modules/izitoast/dist/css/iziToast.min.css");
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_11__);












vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('v-select', vue_select__WEBPACK_IMPORTED_MODULE_6___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('date-picker', vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__["default"]);
var domain = window.location.origin + '/hospital';
var apiBaseURL = "".concat(domain, "/api/");
window.publicPath = "".concat(domain, "/public");
window.axios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: apiBaseURL
});
window.snackbar = {
  success: function success(msg, position) {
    izitoast__WEBPACK_IMPORTED_MODULE_8___default.a.success({
      title: "Success",
      message: msg,
      position: position || "bottomRight"
    });
  },
  error: function error(msg, position) {
    izitoast__WEBPACK_IMPORTED_MODULE_8___default.a.error({
      title: "Error",
      message: msg,
      position: position || "bottomRight"
    });
  },
  warning: function warning(msg, position) {
    izitoast__WEBPACK_IMPORTED_MODULE_8___default.a.warning({
      title: "Warning",
      message: msg,
      position: position || "bottomRight"
    });
  }
};
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  base: 'hospital',
  routes: _routes__WEBPACK_IMPORTED_MODULE_4__["default"],
  mode: 'history'
});
new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  router: router,
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
  render: function render(h) {
    return h(_views_App__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }
}).$mount("#app");

/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  component: function component() {
    return __webpack_require__.e(/*! import() | dashboard */ "dashboard").then(__webpack_require__.bind(null, /*! ./views/dashboard/Index */ "./resources/js/views/dashboard/Index.vue"));
  }
}, {
  path: '/department',
  component: function component() {
    return Promise.all(/*! import() | department */[__webpack_require__.e("acl~appointment~department~doctors~patients~prescription"), __webpack_require__.e("department~doctor"), __webpack_require__.e("department")]).then(__webpack_require__.bind(null, /*! ./views/department/DepartmentList */ "./resources/js/views/department/DepartmentList.vue"));
  }
}, {
  path: '/doctors',
  component: function component() {
    return Promise.all(/*! import() | doctors */[__webpack_require__.e("vendors~doctors"), __webpack_require__.e("acl~appointment~department~doctors~patients~prescription"), __webpack_require__.e("doctors~patients"), __webpack_require__.e("doctors")]).then(__webpack_require__.bind(null, /*! ./views/doctor/DoctorList */ "./resources/js/views/doctor/DoctorList.vue"));
  }
}, {
  path: '/doctor/:id?',
  component: function component() {
    return Promise.all(/*! import() | doctor */[__webpack_require__.e("vendors~doctor"), __webpack_require__.e("department~doctor"), __webpack_require__.e("doctor")]).then(__webpack_require__.bind(null, /*! ./views/doctor/Doctor */ "./resources/js/views/doctor/Doctor.vue"));
  }
}, {
  path: '/patients',
  component: function component() {
    return Promise.all(/*! import() | patients */[__webpack_require__.e("vendors~patients"), __webpack_require__.e("acl~appointment~department~doctors~patients~prescription"), __webpack_require__.e("doctors~patients"), __webpack_require__.e("patients")]).then(__webpack_require__.bind(null, /*! ./views/patient/PatientList */ "./resources/js/views/patient/PatientList.vue"));
  }
}, {
  path: '/patient/:id?',
  component: function component() {
    return __webpack_require__.e(/*! import() | patient */ "patient").then(__webpack_require__.bind(null, /*! ./views/patient/Patient */ "./resources/js/views/patient/Patient.vue"));
  }
}, {
  path: '/appointment',
  component: function component() {
    return Promise.all(/*! import() | appointment */[__webpack_require__.e("acl~appointment~department~doctors~patients~prescription"), __webpack_require__.e("appointment")]).then(__webpack_require__.bind(null, /*! ./views/appointment/Index */ "./resources/js/views/appointment/Index.vue"));
  }
}, {
  path: '/appointment/add',
  component: function component() {
    return __webpack_require__.e(/*! import() | appointment-add */ "appointment-add").then(__webpack_require__.bind(null, /*! ./views/appointment/Create */ "./resources/js/views/appointment/Create.vue"));
  }
}, {
  path: '/appointment/:id/edit',
  component: function component() {
    return __webpack_require__.e(/*! import() | appointment-edit */ "appointment-edit").then(__webpack_require__.bind(null, /*! ./views/appointment/Edit */ "./resources/js/views/appointment/Edit.vue"));
  }
}, {
  path: '/appointment/report',
  component: function component() {
    return __webpack_require__.e(/*! import() | appointment-report */ "appointment-report").then(__webpack_require__.bind(null, /*! ./views/appointment/Report */ "./resources/js/views/appointment/Report.vue"));
  }
}, {
  path: '/prescription',
  component: function component() {
    return Promise.all(/*! import() | prescription */[__webpack_require__.e("acl~appointment~department~doctors~patients~prescription"), __webpack_require__.e("prescription")]).then(__webpack_require__.bind(null, /*! ./views/prescription/Index */ "./resources/js/views/prescription/Index.vue"));
  }
}, {
  path: '/settings/acl',
  component: function component() {
    return Promise.all(/*! import() | acl */[__webpack_require__.e("acl~appointment~department~doctors~patients~prescription"), __webpack_require__.e("acl")]).then(__webpack_require__.bind(null, /*! ./views/settings/acl/Index */ "./resources/js/views/settings/acl/Index.vue"));
  }
}]);

/***/ }),

/***/ "./resources/js/store/department.js":
/*!******************************************!*\
  !*** ./resources/js/store/department.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: function state() {
    return {
      departments: [],
      loading: false
    };
  },
  getters: {
    departments: function departments(state) {
      return state.departments;
    },
    loading: function loading(state) {
      return state.loading;
    }
  },
  mutations: {
    populateDepartments: function populateDepartments(state, payload) {
      return state.departments = payload;
    },
    changeLoadingStatus: function changeLoadingStatus(state, status) {
      return state.loading = status;
    }
  },
  actions: {
    getDepartments: function getDepartments(context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.commit('changeLoadingStatus', true);
                _context.next = 3;
                return axios.post("get_departments", payload).then(function (res) {
                  context.commit('populateDepartments', res.data.departments);
                })["catch"](function (e) {
                  return snackbar.error(e.response.statusText);
                });

              case 3:
                context.commit('changeLoadingStatus', false);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    processDepartment: function processDepartment(context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var isSuccess;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isSuccess = false;
                _context2.next = 3;
                return axios.post(payload.url, payload.data).then(function (res) {
                  isSuccess = true;
                  context.dispatch('getDepartments');
                  snackbar.success(res.data.message);
                })["catch"](function (e) {
                  return snackbar.error(e.response.data.message);
                });

              case 3:
                return _context2.abrupt("return", isSuccess);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/doctor.js":
/*!**************************************!*\
  !*** ./resources/js/store/doctor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: function state() {
    return {
      doctors: [],
      loading: false
    };
  },
  getters: {
    doctors: function doctors(state) {
      return state.doctors;
    },
    loading: function loading(state) {
      return state.loading;
    }
  },
  mutations: {
    populateDoctors: function populateDoctors(state, payload) {
      return state.doctors = payload;
    },
    changeLoadingStatus: function changeLoadingStatus(state, status) {
      return state.loading = status;
    }
  },
  actions: {
    getDoctors: function getDoctors(context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.commit('changeLoadingStatus', true);
                _context.next = 3;
                return axios.post("get_doctors", payload).then(function (res) {
                  context.commit('populateDoctors', res.data.doctors);
                })["catch"](function (e) {
                  return snackbar.error(e.response.statusText);
                });

              case 3:
                context.commit('changeLoadingStatus', false);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getDoctor: function getDoctor(context, id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var doctor;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                doctor = null;
                _context2.next = 3;
                return axios.get("get_doctor/".concat(id)).then(function (res) {
                  return doctor = res.data.doctor;
                })["catch"](function (e) {
                  return snackbar.error(e.response.statusText);
                });

              case 3:
                return _context2.abrupt("return", doctor);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    processDoctor: function processDoctor(context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var isSuccess;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                isSuccess = false;
                _context3.next = 3;
                return axios.post(payload.url, payload.data).then(function (res) {
                  isSuccess = true;
                  context.dispatch('getDoctors');
                  snackbar.success(res.data.message);
                })["catch"](function (e) {
                  return snackbar.error(e.response.data.message);
                });

              case 3:
                return _context3.abrupt("return", isSuccess);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/doctor_schedule.js":
/*!***********************************************!*\
  !*** ./resources/js/store/doctor_schedule.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: function state() {
    return {
      days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      schedules: [],
      loading: false
    };
  },
  getters: {
    days: function days(state) {
      return state.days;
    },
    schedules: function schedules(state) {
      return state.schedules;
    },
    loading: function loading(state) {
      return state.loading;
    }
  },
  mutations: {
    populateSchedules: function populateSchedules(state, payload) {
      return state.schedules = payload;
    },
    changeLoadingStatus: function changeLoadingStatus(state, status) {
      return state.loading = status;
    }
  },
  actions: {
    getSchedules: function getSchedules(context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context.commit('changeLoadingStatus', true);
                _context.next = 3;
                return axios.post("get_doctor_schedules", payload).then(function (res) {
                  context.commit('populateSchedules', res.data.doctor_schedules);
                })["catch"](function (e) {
                  return snackbar.error(e.response.statusText);
                });

              case 3:
                context.commit('changeLoadingStatus', false);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    processSchedule: function processSchedule(context, payload) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var isSuccess;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isSuccess = false;
                _context2.next = 3;
                return axios.post(payload.url, payload.data).then(function (res) {
                  isSuccess = true;
                  context.dispatch('getSchedules', {
                    doctor_id: res.data.doctor_id
                  });
                  snackbar.success(res.data.message);
                })["catch"](function (e) {
                  return snackbar.error(e.response.data.message);
                });

              case 3:
                return _context2.abrupt("return", isSuccess);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department */ "./resources/js/store/department.js");
/* harmony import */ var _doctor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor */ "./resources/js/store/doctor.js");
/* harmony import */ var _doctor_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor_schedule */ "./resources/js/store/doctor_schedule.js");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    department: _department__WEBPACK_IMPORTED_MODULE_2__["default"],
    doctor: _doctor__WEBPACK_IMPORTED_MODULE_3__["default"],
    doctorSchedule: _doctor_schedule__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./resources/js/views/App.vue":
/*!************************************!*\
  !*** ./resources/js/views/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=91ac6b5c& */ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=template&id=91ac6b5c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=91ac6b5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./resources/js/app.js ./resources/css/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\xampp\htdocs\hospital\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! D:\xampp\htdocs\hospital\resources\css\app.css */"./resources/css/app.css");


/***/ })

/******/ });