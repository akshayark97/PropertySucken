import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/cloudinary";

// GET: /api/properties/featured
export const GET = async (request) => {
  try {
    await connectDB();

    const featuredProperties = await Property.find({ is_featured : true })
    
    return new Response(JSON.stringify(featuredProperties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went  wrong!" }), {
      status: 500,
    });
  }
};