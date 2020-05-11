const matching = members.filter(() => {
  // you have to write this code
});

if (matching.length === 0) {
  // send some sort of error message
  res.send("???");
} else {
  const member = matching[0];
  // assemble some html with the `member` object you found
  res.send("???");
}
