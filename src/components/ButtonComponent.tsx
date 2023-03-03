export default function ButtonComponent({ text, onClick }: any) {
	return (
		<button
			onClick={onClick}
			className="text-white font-bold px-10 py-2 bg-gradient-to-r from-custom-pink to-custom-blue hover:from-custom-pink-dark hover:to-custom-blue-dark active:from-custom-pink-darker active:to-custom-blue-darker hover:text-gray-200 active:text-gray-300 rounded-full"
		>
			{text}
		</button>
	);
}
