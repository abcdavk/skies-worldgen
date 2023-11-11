import {
    world,
    Vector
} from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe(({
	player
}) => {
	if (!player.hasTag("dave:skiesHasLoaded")) {
		player.teleport({
			x: 59,
			y: 98,
			z: -6
		}, {
			dimension: world.getDimension('overworld')
		});
		world.setDefaultSpawnLocation({
			x: 59,
			y: 98,
			z: -6
		});
		player.addTag("dave:skiesHasLoaded");
	}
});