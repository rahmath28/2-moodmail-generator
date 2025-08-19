// intha home page than app la render aga pothu..
import MoodeInput from "@/components/ui/MoodInput"
import MoodeOutput from "@/components/ui/MoodOutput"
import { useState } from "react"




const Home = () => {
  // states for app:

  // mood input states:
  const [mood, setMood] = useState("");
  const [generated, setGenerated] = useState(false);
  // mood output states : to display output
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");

  
  // customised moods: for avoid multiple else-if conditions , because of using typescript we have to mention , its type..
  // multiple objects : ku Record<string, this statement, single object na is enough :{ subject: string; footer: string }
  const customisedMoods: Record<string, { subject: string; footer: string }> = {

    happy: {
      subject: "Feeling happy",
      footer: "Always be happy..",
    },

    motivated: {
      subject: "🚀 Time to Chase Your Dreams",
      footer: "Stay focused, stay strong — success is near."
    },

    sad: {
      subject: "Feeling sad",
      footer: "Sending hugs..",
    },
    calm: {
      subject: "🌿 Peaceful Moments Ahead",
      footer: "Take a deep breath. Relax. Everything’s under control."
    },

    angry: {
      subject: "Feeling tough today",
      footer: "Just chill..",
    },

    excited: {
      subject: "Feeling excited",
      footer: "Keep the energy high!",
    },

    lonely: {
      subject: "Feeling lonely",
      footer: "You are not alone ❤️",
    }

  }


  // handle generate
  const handleGenerate = () => {

    const lowermood = mood.toLowerCase(); // converting the mood state to lower case..

    if (lowermood === "") {
      alert("please fill the field");
      return; // stop further execution
    }

    // const selectedMood = Object.keys(customisedMoods); 
    // console.log(selectedMood) // weill get all the keys as array : (5) ['happy', 'sad', 'angry', 'excited', 'lonely']
    // got as array : so i can use "find" method , so condition based on that..

    const selectedMood = Object.keys(customisedMoods).find(m => lowermood.includes(m)); // keys use panni find pandrom.

    
     // lowermood : mood state la get pannatha lowercase ku convert panna variable.
    
      // selected mood variable la , keys use panni find panna array of keys as string ah kedaikum, so used includes method ,

    if(selectedMood){ // if keys match achuna.. , match ana key oda values as object ah irukku so , dot use panni display pandrom..
      setSubject(customisedMoods[selectedMood].subject); // why dot subject na : will get that key , the value is object so we can get like that.
      setFooter(customisedMoods[selectedMood].footer);
    }else{
      setSubject("Oops! 🤔");
      setFooter( "Something didn’t match. Let’s check again.");
    }
    
    // FINAL NOTE  : BY CUSTOMISE MOODS AS OBJECT
    // 1.object keys ah get pandren in a variable selectedMood, will get each keys as string of arrray,
    // 2.Array : nala  so can use find method use panni input la type pannnatha irukka keys uhm math aguratha find pandrom.., match agiduchuna atha ennoda selectedMood,
    // 3.so selected mood iruntha atha display pandrom,  main object la find panna key vachu athoda value ah get panni update pandrom..
    // 4 . thats it..

    setGenerated(true); // while submit generate is true..
    setMood("");
  }

  // handle reset
  const handleReset = () => {

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

      {/* submit nadakka pothuna moode input will display else moodeoutput */}

      { // genearate aguthu na handle submit nadakkanum..
        !generated ? (<MoodeInput mood={mood} setMood={setMood} onGenerate={handleGenerate} isDisabled={generated} />)
          : (<MoodeOutput subject={subject} footer={footer} onReset={handleReset} disabled={generated} />)
      }


    </div>
  )
}

// moodinput : ku thevayanatha ippo , props la passs panni , destructure panni logic use pannikkalam..
export default Home