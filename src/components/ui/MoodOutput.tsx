// for to display output of mood , text area to display output and button to reset..
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


// props get way for typescript.
type Props ={
  subject:string,
  footer:string,
  onReset:() => void
  disabled:boolean
}

const MoodOutput = ( {subject, footer, onReset }:Props ) => {

  const today = new Date();
  const dateString = today.toISOString().split("T")[0];

  // handle copy to clipboard.
   const handleCopy = (text: string) => { // getting a text as string..
    navigator.clipboard // navigator : built in object in browser environment, clipboard : allows you to read from or write , used for copy and paste.
      .writeText(text) // writeText() : is a method that copies text to the clipboard, writeText returns a Promise (something that happens asynchronously).
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy"));
  };

  return (
    <div className="space-y-4">
      {/* to display , mail related to mood */}
      <div>
        <label className="">Subject:</label>
        <div className="flex  gap-3">
          <Input value={`${subject} - Date : ${dateString}`} readOnly  />
          <Button onClick={() => handleCopy(subject)}>Copy subject</Button>
          
        </div>
       
      </div>
      

      {/* content realted to mood */}
      <div>
        <label className="block">Footer Signature:</label>
        <div className="flex  gap-3">
          <Textarea value={footer} readOnly />
          <Button onClick={() => handleCopy(footer)}>Copy footer</Button>
        </div>
      </div>

      {/* button for reset */}
      <Button className="w-full" variant="destructive" onClick={onReset}>Resest</Button>


    </div>
  )
}

export default MoodOutput