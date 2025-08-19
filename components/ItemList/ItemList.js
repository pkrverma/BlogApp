import Link from "next/link";
import Card from "@/components/Card/Card";
import { truncateText } from "@/utils/helpers";

export default function ItemList({ items = [] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            {item.title}
          </h2>
          <p className="text-gray-700 mb-4">{truncateText(item.body)}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">
              {typeof item.reactions === "object"
                ? `${item.reactions.likes || 0} likes, ${
                    item.reactions.dislikes || 0
                  } dislikes`
                : `${item.reactions || 0} reactions`}
            </span>
            <Link
              href={`/blog/${item.id}`}
              className="text-green-700 hover:underline"
            >
              Read More
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
