/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});
		//Checks that all feeds have a URL
		it('has an URL', function() {
			allFeeds.forEach(function(feeds) {
				expect(feeds.url).toBeDefined();
				expect(feeds.url.length).not.toBe(0);
			});
		});
		//Checks that all feeds have a name
		it('has an URL', function() {
			allFeeds.forEach(function(feeds) {
				expect(feeds.url).toBeDefined();
				expect(feeds.url.length).not.toBe(0);
			});
		});
	});
	describe("The menu", function() {
		//Test to see that the menu is hidden
		it("the menu is hidden by default", function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
		it("the menu changes visibility", function() {
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false);
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});
	describe("Initial Entries", function() {
		beforeEach(function(done) {
				loadFeed(0, function() {
					done();
				});
			});
			//Tests to make sure that .feed container has at least a single .entry
		it("Has an entry", function() {
			expect($('.feed.entry'.length)).not.toBe(0);
		});
	});
	describe("New Feed Selection", function() {
			var initialFeed;
			beforeEach(function(done) {
				loadFeed(1, function() {
					initialFeed = $(".feed");
					console.log(initialFeed);
					loadFeed(0, function() {
						done();
					});
				});
			});
			it("Content actually changes", function() {
				expect($(".feed")).not.toBe(initialFeed);
			});
		});
		/* TODO: Write a new test suite named "New Feed Selection" */
		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
}());
