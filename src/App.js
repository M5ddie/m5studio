import HomePage from "./pages/homePage";
import SchedMeeting from "./components/schedmeeting";
import EmailMe from "./components/emailMe";

function App() {
  return (
    <div className="App">
      <HomePage />
      <SchedMeeting/>
      <EmailMe/>
    </div>
  );
}

export default App;
