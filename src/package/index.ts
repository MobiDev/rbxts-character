const Assets = script.Parent?.Parent?.FindFirstChild("assets");
const R6BlockRig = Assets?.FindFirstChild("R6BlockRig");

assert(
	R6BlockRig && R6BlockRig.IsA("Model") && Assets,
	"@rbxts/character: An error occurred retrieving Character Assets",
);
print(Assets.Name);
print(R6BlockRig.Name);

class Rig {
	private Shirt?: Shirt;
	private Pants?: Pants;
	constructor(public Rig: Model) {}
	public setShirt(id?: number | string) {
		if (id === undefined) return this.Shirt?.Destroy();
		if (!this.Shirt) {
			this.Shirt = new Instance("Shirt");
			this.Shirt.Parent = this.Rig;
			this.Shirt.Name = "Shirt";
			this.Shirt.ShirtTemplate = tostring(id);
		} else {
			this.Shirt.ShirtTemplate = tostring(id);
		}
	}

	public setPants(id?: number | string) {
		if (id === undefined) return this.Pants?.Destroy();
		print(this.Pants?.Name);
		if (!this.Pants) {
			print("NoPants");
			this.Pants = new Instance("Pants");
			this.Pants.Parent = this.Rig;
			this.Pants.Name = "Pants";
			this.Pants.PantsTemplate = tostring(id);
		} else {
			print("YesPants");
			this.Pants.PantsTemplate = tostring(id);
		}
	}
}

export class R6Rig extends Rig {
	constructor() {
		super(R6BlockRig!.Clone() as Model);
	}
}

export type { Rig };
