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

  return (
    <div className="space-y-4">
      {/* to display , mail related to mood */}
      <div>
        <label className="">Subject:</label>
        <Input value={subject} readOnly />
      </div>

      {/* content realted to mood */}
      <div>
        <label className="block">Footer Signature:</label>
        <Textarea value={footer} readOnly />
      </div>

      {/* button for reset */}
      <Button className="w-full" variant="destructive" onClick={onReset}>Resest</Button>


    </div>
  )
}

export default MoodOutput