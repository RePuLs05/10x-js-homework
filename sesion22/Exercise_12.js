function magicMirror(message, transformFunction) {
  return `The mirror says: ${transformFunction(message)}`;
}

console.log(magicMirror("will i be rich?", string => string.toUpperCase()));
