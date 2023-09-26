// Stats
export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Go add some things on your Packing List ༼ つ ◕_◕ ༽つ</em>
      </footer>
    );
  }

  const itemLength = items.length === 0 ? "no" : items.length;
  const numPacked = items.filter((element) => element.packed === true).length;
  const packedPercentage =
    items.length === 0 ? 0 : Math.round((numPacked / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything you need go go go! ╰(*°▽°*)╯"
          : `🧳 You have ${itemLength} items on your list, and you have already packed ${numPacked} (${packedPercentage})%`}
      </em>
    </footer>
  );
}
