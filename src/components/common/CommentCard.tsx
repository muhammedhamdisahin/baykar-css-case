import Image, { StaticImageData } from "next/image";

type CommentType = {
  icon: StaticImageData;
  title: string;
  content: string;
  profile: {
    image: StaticImageData;
    name: string;
    position: string;
  };
};

export default function CommentCard(comment: CommentType) {
  return (
    <div className="comment-card-container">
      <div className="flex items-center space-x-1">
        <Image src={comment.icon} alt="Company icon" />
        <div className="text-2xl font-bold text-gray-90">{comment.title}</div>
      </div>
      <div className="text-2xl text-wrap">{comment.content}</div>
      <div className="flex items-center space-x-[0.5rem]">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image src={comment.profile.image} alt="Profile photo" />
        </div>
        <div>
          <div className="text-lg">{comment.profile.name}</div>
          <div className="text-gray-90">{comment.profile.position}</div>
        </div>
      </div>
    </div>
  );
}
