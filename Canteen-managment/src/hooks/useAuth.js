import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = useState({});
  const loadData = async () => {
    const result = await axios.get("");
    setUser(result.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return { user };
};
export default useAuth;
