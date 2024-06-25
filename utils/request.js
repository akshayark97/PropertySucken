const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties({isFeatured = false} = {}) {
  try {
    // handle the case where domain is not available
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties${isFeatured ? '/featured' : ''}`, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchProperty(id) {
    try {
      // handle the case where domain is not available
      if (!apiDomain) {
        return null;
      }
      const res = await fetch(`${apiDomain}/properties/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export { fetchProperties, fetchProperty };
