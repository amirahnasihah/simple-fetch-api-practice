import { Box } from "@mui/system";
import AdminForm from "./AdminForm";
import Meals from "./Meals";

const Main = ({ item }) => {
  return (
    <Box>
      <h3>Admin Main Component</h3>
      <AdminForm />
      <Meals />
    </Box>
  );
};
export default Main;
