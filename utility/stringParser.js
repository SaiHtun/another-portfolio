function spaceToDash(str) {
  return str.replace(/\s+/g, "-");
}

function dashToSpace(str) {
  return str.replace(/-/g, " ");
}


module.exports = {
  spaceToDash,
  dashToSpace,
};
