import { screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";

describe("App component", function () {
    it("should render App", async () => {
        
    const title = await screen.findByText("Catalog");
    expect(title).toBeInTheDocument();
    })
})