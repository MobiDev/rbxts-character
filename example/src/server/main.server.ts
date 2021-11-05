import { R6Rig } from "@rbxts/character"

const rig = new R6Rig()
print(rig.Rig)
rig.Rig.Parent = game.GetService("Workspace")
rig.Rig.PivotTo(new CFrame(new Vector3(0,4,0)))
rig.setShirt("http://www.roblox.com/asset/?id=1351457156")
rig.setPants("http://www.roblox.com/asset/?id=1351458240")