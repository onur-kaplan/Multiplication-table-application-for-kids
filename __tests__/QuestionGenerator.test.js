import {QuestionGenerator} from "../classes";

/**
 * @jest-environment jsdom
 */
test('9 dan küçük rakjam üret', () => {
    let generator = new QuestionGenerator();
    let expected = generator.firstNumber * generator.secondNumber;
    expect(expected).toBe(generator.result)
});
