import {
  act,
  waitFor,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/store";
import Body from "../Body";
import "@testing-library/jest-dom";

const mockData = {
  data: {
    cards: [
      {},
      {},
      {},
      {},
      {
        card: {
          card: {
            gridElements: {
              infoWithStyle: {
                restaurants: [
                  {
                    info: {
                      id: "1",
                      name: "Pizza Hut",
                      cuisines: ["rasgulla"],
                    },
                  },
                  {
                    info: {
                      id: "2",
                      name: "Dominos",
                      cuisines: ["kajjue katali", "moonge barfi"],
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ],
  },
};

describe("Body Page", () => {
  beforeAll(() => {
    console.log("Call before all test case...");
  });
  beforeEach(() => {
    console.log("Call before each test case...");
  });
  afterEach(() => {
    console.log("Call ater each test case...");
  });
  afterAll(() => {
    console.log("Call after all test case...");
  });

  it("Should load Body Page", async () => {
    // Mock fetch success
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    await act(async () => {
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </MemoryRouter>
      );
    });

    //Assertion
    await waitFor(() =>
      expect(screen.getByText("Pizza Hut")).toBeInTheDocument()
    );
  });

  it("Should load Body Page", async () => {
    // Define jest fn for fetch method
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    // Need to wrap in act if component have async operations like setState, effects
    await act(async () => {
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </MemoryRouter>
      );
    });

    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByRole("button", { name: "Search" });

    fireEvent.change(searchInput, { target: { value: "Pizza Hut" } });
    fireEvent.click(searchButton);

    const getAllCard = screen.getAllByTestId("card");
    // console.log(getAllCard);

    //Assertion
    expect(getAllCard.length).toBe(1);
  });
});
