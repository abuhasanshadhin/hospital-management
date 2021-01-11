export default {
    empty(propsArray, dataObject) {
        let hasError = 0;
        for (let i = 0; i < propsArray.length; i++) {
            const prop = propsArray[i];
            if (!dataObject[prop]) {
                hasError++;
                let propName = prop.replace("_id", "");
                propName = propName.replace("_", " ");
                let message = `The ${propName} field is required`;
                snackbar.warning(message, "topRight");
                break
            }
        }
        return hasError ? true : false;
    }
}
