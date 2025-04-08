import Counter from "./Counter";
import { fireEvent, render } from "@testing-library/react";
import * as allure from "allure-js-commons";

describe("Counter Component", () => {
    it("카운터의 시작값은 0이다.", async () => {
        await allure.epic("Counter");
        await allure.feature("Counter Display");
        await allure.story("Initial State");

        const { getByText } = render(
            <Counter item={{ id: 1, name: "Counter 1", count: 0 }} />,
        );
        expect(getByText("0")).not.toBeNull();
    });
});

describe("더하기 버튼을 눌렀을 경우", () => {
    it("카운터가 1 증가한다.", async () => {
        await allure.epic("Counter");
        await allure.feature("Counter Operations");
        await allure.story("Increment");

        const { getByText, getByRole } = render(
            <Counter item={{ id: 1, name: "Counter 1", count: 0 }} />,
        );

        await allure.step("Find increment button", async () => {
            const button = getByRole("button", { name: "Increment" });
            await allure.step("Click increment button", async () => {
                fireEvent.click(button);
            });
        });

        await allure.step("Verify count is incremented", async () => {
            expect(getByText("1")).not.toBeNull();
        });
    });
});

describe("빼기 버튼을 눌렀을 경우", () => {
    it("카운터가 1 감소한다.", async () => {
        await allure.epic("Counter");
        await allure.feature("Counter Operations");
        await allure.story("Decrement");

        const { getByText, getByRole } = render(
            <Counter item={{ id: 1, name: "Counter 1", count: 0 }} />,
        );

        await allure.step("Find decrement button", async () => {
            const button = getByRole("button", { name: "Decrement" });
            await allure.step("Click decrement button", async () => {
                fireEvent.click(button);
            });
        });

        await allure.step("Verify count is decremented", async () => {
            expect(getByText("-1")).not.toBeNull();
        });
    });
});
