import assert from "assert";

describe("ubai", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../imports/ui/package.json");
    assert.strictEqual(name, "ubai");
  });

  if (Meteor.isClient) {
    it("client is not api", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("api is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
