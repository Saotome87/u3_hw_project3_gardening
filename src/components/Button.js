import Push from '...'

let pushArray = []
.
.
.

let [displayPush, setDisplayPush] = useState(false)
.
.
.


const createWorkoutCategories = () => {
  for (let i = 0; i < workouts.length; i++) {
    if (workouts[i].workout_category === 'push') {
      pushArray.push(workouts[i])
    } else if (workouts[i].workout_category === 'pull') {
      pullArray.push(workouts[i])
    } else if (workouts[i].workout_category === 'leg') {
      legArray.push(workouts[i])
    } else if (workouts[i].workout_category === 'abdominals') {
      abdominalsArray.push(workouts[i])
    }


    createWorkoutCategories()

    function togglePush() {
      setDisplayPush(true)
      setDisplayPull(false)
      setDisplayLeg(false)
      setDisplayAbdominals(false)
    }
    function togglePull() {
      setDisplayPush(false)
      setDisplayPull(true)
      setDisplayLeg(false)
      setDisplayAbdominals(false)
    }
    function toggleLeg() {
      setDisplayPush(false)
      setDisplayPull(false)
      setDisplayLeg(true)
      setDisplayAbdominals(false)
    }
    function toggleAbdominals() {
      setDisplayPush(false)
      setDisplayPull(false)
      setDisplayLeg(false)
      setDisplayAbdominals(true)

<button className="button" onClick={() => togglePush()}>
            Push
          </button>
<button className="button" onClick={() => togglePull()}>
            Pull
          </button>
<button className="button" onClick={() => toggleLeg()}>
            Leg
          </button>


{
  "workout_name": "Flat barbell bench press",
  "main_muscles": "pectoralis major, triceps brachii",
  "secondary_muscles": "anterior deltoids",
  "workout_category": "push",
  "workout_gif": "https://thumbs.gfycat.com/CleverFocusedChupacabra-size_restricted.gif",
  "id": 1
},

