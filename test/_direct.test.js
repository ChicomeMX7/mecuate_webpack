describe("#SAMPLE", () => {
	describe("Alway pass", () => {
		const m = {
			sum: (a, b) => {
				return a + b;
			},
		};
		const mockCallback = jest.fn((x) => 42 + x);
		function forEach(items, callback) {
			for (let index = 0; index < items.length; index++) {
				callback(items[index]);
			}
		}

		// The mock function is called twice
		test("Adding 1 + 2 should return 3", () => {
			expect(m.sum(1, 2)).toBe(3);
		});
		test("Others", () => {
			forEach([0, 1], mockCallback);
			expect(mockCallback.mock.calls.length).toBe(2);

			// The first argument of the first call to the function was 0
			expect(mockCallback.mock.calls[0][0]).toBe(0);

			// The first argument of the second call to the function was 1
			expect(mockCallback.mock.calls[1][0]).toBe(1);

			// The return value of the first call to the function was 42
			expect(mockCallback.mock.results[0].value).toBe(42);
		});
		describe("when 'Button' is clicked", () => {
			it("should call 'onClick'", () => {
				// Arrange
				const onClickMock = jest.fn((x) => x + 5);
				const props = {
					onClick: onClickMock,
				};

				// Act
                let response = props.onClick(4);

				// Assert
				expect(onClickMock).toHaveBeenCalled();
                expect(response).toBe(9);
			});
		});
	});

});
