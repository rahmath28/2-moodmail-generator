// intha home page than app la render aga pothu..
import MoodeInput from "@/components/ui/MoodInput"
import MoodeOutput from "@/components/ui/MoodOutput"
import { useState } from "react"




const Home = () => {
  // states for app
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  // handle generate
  const handleGenerate = () => {

    const lowermood = mood.toLowerCase();

    if (lowermood === "") {
      alert("please fill the field");
      return; // stop further execution
    }

    if (lowermood.includes("happy")) {
      setSubject("Feeling happy");
      setFooter("Always be happy..");
    } else if (lowermood.includes("sad")) {
      setSubject("Feeling sad");
      setFooter("Send hugs..");
    } else if (lowermood.includes("angry")) {
      setSubject("Feeling tough today");
      setFooter("Just chill..");
    }

    if (
      lowermood !== "happy" &&
      lowermood !== "sad" &&
      lowermood !== "angry"
    ) {
      setSubject("update mood");
      setFooter("Dont wrorry , be happy");
    }
    // generate true
    setGenerated(true);
    setMood("");
  }

  // handle reset
  const handleReset = () =>{

    setSubject("");
    setFooter("");
    // after reset generated , turn false
    setGenerated(false);
  } 

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 rounded-lg space-y-4  shadow-sm bg-white">
      <h2 className="text-2xl text-gray-500 font-bold text-center">MoodMail Generator</h2>

      {/* Input for moodmail */}

      {/* input ku thevayana state ah props la pass pandrom for both moodInput and moodoutput.. */}
      {/* input ku thevayanthu , mood state to store mood , setmood function to update state and  generate state*/}
      <MoodeInput mood={mood} setMood={setMood} onGenerate={handleGenerate} isDisabled={generated} />
      <MoodeOutput subject={subject} footer={footer} onReset={handleReset} disabled = {generated}/>
    </div>
  )
}

// moodinput : ku thevayanatha ippo , props la passs panni , destructure panni logic use pannikkalam..
export default Home