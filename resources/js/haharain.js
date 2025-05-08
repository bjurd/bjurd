const SetupHaha = () =>
{
	const Container = document.getElementById("haharain");
	if (!Container) return;

	const CreateHaha = () =>
	{
		const HahaBall = document.createElement("img");
		HahaBall.src = "./resources/img/hahaball.png";
		HahaBall.className = "hahaball";

		const Size = 20 + Math.random() * 60;
		const Left = Math.random() * 100;
		const Speed = 3 + Math.random() * 5;
		const Rotation = Math.random() * 360;
		const RotationStyle = Math.random() < 0.5 ? "HahaFall" : "HahaFallTheOtherWay";

		HahaBall.style.width = Size + "px";
		HahaBall.style.left = Left + "vw";
		HahaBall.style.animationName = RotationStyle;
		HahaBall.style.animationDuration = Speed + "s";
		HahaBall.style.transform = `rotate(${Rotation}deg)`;

		HahaBall.addEventListener("animationend", () =>
		{
			Container.removeChild(HahaBall);
			CreateHaha();
		});

		Container.appendChild(HahaBall);
	}

	for (let i = 0; i < 20; i++)
		CreateHaha();
}

window.addEventListener("load", () =>
{
	SetupHaha();
});
