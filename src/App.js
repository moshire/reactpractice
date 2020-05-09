import React from "react";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles ={
    fontSize: 30
  }
  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "grey"

  } else if (hours > 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "blue"

  } else {
    timeOfDay = "Night";
    styles.color = "green"
  }
  return <h1 style={styles}>Good{timeOfDay}!</h1>;
}
export default App;
