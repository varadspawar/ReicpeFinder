import Header from "../Components/Header";
import { Button } from "semantic-ui-react";

const Home = () => {
   return(
    <Header title = "Our Recipes" bgClass = "bgImage">
        <Button
            content = "SEARCH RECIPES"
            color="primary"
        />
    </Header>
    
   )
}

export default Home;