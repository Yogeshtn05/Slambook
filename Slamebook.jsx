function Slamebook()
{
  return(
    <center>
      <fieldset> 
        <legend color="black">SlamBook</legend>
        <label>Name </label>
        <input type="text" placeholder="Type here" id="name"></input><br></br>
        <label>Nickname </label>
        <input type="text" placeholder="Type here" id="Nickname"></input><br></br>
        <label>Address </label>
        <input type="text" placeholder="Type here" id="Address"></input><br></br>
        <label>Phone </label>
        <input type="text" placeholder="Type here" size={10} id="Phone"></input><br></br>
        <label>Memories </label>
        <input type="text" placeholder="Type here" size={25}  id="Memories"></input><br></br>
        <label for="Gender">Gender: </label>
        <label for="Male">Male</label>
        <input type="radio" id="Male"></input>
        <label for="Female">Female</label>
        <input type="radio" id="Female"></input><br></br>
        <label for="FavActor">FavActor: </label>
        <label for="Vijay">Vijay</label>
        <input type="radio" id="Vijay"></input>
        <label for="Ajith">Ajith</label>
        <input type="radio" id="Ajith"></input><br></br>
        <label for="Ajith">College</label>
        <input type= "s" id="College" ></input><br></br>
        <button>Submit</button>
      </fieldset>
    </center>
  )
}
export default Slamebook;