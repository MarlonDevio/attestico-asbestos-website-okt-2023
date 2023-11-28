const getKeysFromArrOfObjects = (arr, k) => {
  return arr.map((obj) => obj[k]);
};

// Function to create object with selection of existing object
const generateNewObjs = (arr, ...properties) => {
  return arr.map((item) => {
    const newObj = {};
    properties.forEach((prop) => {
      if (item[prop] !== undefined) {
        newObj[prop] = item[prop];
      }
    });
    return newObj;
  });
};

export { getKeysFromArrOfObjects, generateNewObjs };

// test createNewObj
// console.log(createNewObj(icons, "icon"));

export const handleEmailClick = () => {
  window.location.href = "mailto:ricardodicostanzo@outlook.com";
};
export const openPDFInNewTab = () => {
  window.open(
    "src/assets/pdf/opdrachtformulier.pdf",
    "_blank",
    "noopener,noreferrer",
  );
};
