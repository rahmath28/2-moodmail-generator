// This component is to get input of mood from user..
// inpiut with one button to generate..

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Props ={
  mood:string,
  setMood:(val:string) => void,
  onGenerate:() => void
}

const MoodeInput = ( {mood, setMood , onGenerate, isDisabled }:Props ) => { // destructuring from props

 
  
  return (
    <div className="space-y-4">

      {/* input for to type mood */}
      <Input value={mood}
      placeholder="How are you feeling today? (happy, sad, angry...)"
      onChange={(e) => setMood(e.target.value)} 
      disabled = {isDisabled}
      />
      {/* {mood} : just got and checked the state of mood value */}
      {/* next button to generate mail */}
      <Button className="w-full" onClick={onGenerate}>
        Generate Mail
      </Button>
    </div>
  )
}

export default MoodeInput