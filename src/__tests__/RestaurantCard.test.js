import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../components/restaurantCard/RestaurantCard";
import mockData from "../mocks/resCardMock.json";
describe("Test cases for Restaurant Card Component", () => {
  it("should render RestauradntCard component with props data", () => {
    render(<RestaurantCard resData={mockData} />);
    const resName = screen.getByText("Gurukripa Restaurant - Sarwate");
    expect(resName).toBeInTheDocument();
  });
});
