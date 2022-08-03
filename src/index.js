module.exports = function check(str, bracketsConfig) {
  let strArray = [...str];
  let enableSplice = false;

  let res = forEachBracketsConfig(bracketsConfig);

  function forEachBracketsConfig(bConfig) {
    bConfig.forEach(element => filterArray(strArray, element));

    if (strArray.length > 1 && enableSplice) {
      enableSplice = false;
      forEachBracketsConfig(bracketsConfig);
    }
    return strArray.length ? false : true;
  }

  function filterArray(strArray, bConfig) {
    strArray.filter((element, index, array) => {

      if ((element == bConfig[0]) && (array[index + 1] == bConfig[1])) {

        enableSplice = true;
        strArray.splice(index, 2);

        if (strArray.length > 1) {
          filterArray(strArray, bConfig);
        } else { return true }

        return true;

      } else { return false }

    });
    return strArray.length ? false : true;
  }

  return res;
}
