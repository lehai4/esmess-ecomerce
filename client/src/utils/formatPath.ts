export const convertPath = (path: string) => {
  let space = path.indexOf(" ");
  let stringStart = path.slice(0, space);
  let stringEnd = path.slice(space + 1, path.length);
  let currentPath: string =
    stringStart.toLowerCase() + "-" + stringEnd.toLowerCase();
  return currentPath;
};

export const declarePath = (path: string) => {
  let replaceResult = path.replaceAll("-", " ");
  const str = replaceResult;

  //split the above string into an array of strings
  //whenever a blank space is encountered

  const arr = str.split(" ");
  //loop through each element of the array and capitalize the first letter.

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  const str2 = arr.join(" ");
  return str2;
};
