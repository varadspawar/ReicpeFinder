import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { Button } from "semantic-ui-react";

const Home = () => {
   return(
    <Header title = "Our Recipes" bgClass = "bgImage">
        <Button 
            as={Link} 
            to="/recipes"
            content = "SEARCH RECIPES"
            color="primary"
            size="big"
        />
    </Header>
    
   )
}

export default Home;