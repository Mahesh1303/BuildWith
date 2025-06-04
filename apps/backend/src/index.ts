import app from "./app";
import { Prisma } from "./db";
import { PORT } from "./lib/envConfig/envConf";

Prisma.$connect()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
