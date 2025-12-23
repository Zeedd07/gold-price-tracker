export const getGoldPrice = async (req, res) => {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": process.env.GOLD_API_KEY,
      },
    });

    const data = await response.json();
  
    res.json({
      price: data.price,
      currency: "USD",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gold price" });
  }
};
