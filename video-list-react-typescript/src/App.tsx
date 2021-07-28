import {VideoList} from "./components/VideoList";
import {mockData} from "./data/mockData";

export default function App() {
  return (
    <div className="App">
      <h1>Video List</h1>
      <VideoList videos={mockData} />
    </div>
  );
}
