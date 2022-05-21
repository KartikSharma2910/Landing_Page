import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import styles from "./styles";

const Banner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <Box sx={styles.wrapper}>
        <Box className="column" sx={styles.leftBox}>
          <Box sx={styles.heading}>Welcome to the company</Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.inputBox}>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "true" })}
                className="input"
              />
              {errors.firstName && (
                <span className="error">FirstName is required</span>
              )}
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "true" })}
                className="input"
              />
              {errors.lastName && (
                <span className="error">LastName is required</span>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", { required: "true" })}
                className="input"
              />
              {errors.phoneNumber && (
                <span className="error">PhoneNumber is required</span>
              )}
              <input
                type="text"
                placeholder="E-mail"
                {...register("email", { required: "true" })}
                className="input"
              />

              {errors.email && <span className="error">Email is required</span>}
              <button className="button">Submit</button>
            </Box>
          </form>
        </Box>
        <Box className="column">
          <Box component="img" src="/formImage.jpeg" sx={styles.image} />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
