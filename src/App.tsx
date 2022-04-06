import ExerciseEight from "./pages/ExerciseEight";
import ExerciseFive from "./pages/ExerciseFive";
import ExerciseFour from "./pages/ExerciseFour";
import ExerciseOne from "./pages/ExerciseOne";
import ExerciseSeven from "./pages/ExerciseSeven";
import ExerciseSix from "./pages/ExerciseSix";
import ExerciseThree from "./pages/ExerciseThree";
import ExerciseTwo from "./pages/ExerciseTwo";

const App = () => {
  return (
    <>
      <div className="w-screen flex flex-col justify-center px-12 bg-pink-100 gap-4 overscroll-y-auto py-6">
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise One</h1>
          <ExerciseOne />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Two</h1>
          <ExerciseTwo />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Three</h1>
          <ExerciseThree />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Four</h1>
          <ExerciseFour />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Five</h1>
          <ExerciseFive />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Six</h1>
          <ExerciseSix />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Seven</h1>
          <ExerciseSeven />
        </div>
        <div className="flex flex-col bg-pink-400 rounded-md min-w-full justify-center px-4 pb-4 gap-2 shadow-md">
          <h1 className="pt-2 text-slate-50">Exercise Eight</h1>
          <ExerciseEight />
        </div>
      </div>
    </>
  );
};

export default App;
