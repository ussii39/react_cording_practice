import React from "react";

interface CardProps {
  birthDay?: string;
  phoneNumber?: string;
  image?: string; // 画像のURL
}

export const ProfileCardComponent = React.memo(
  ({ image, birthDay, phoneNumber }: CardProps) => {
    return (
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden my-5">
        <div className="text-center">
          {image && (
            <div className="flex justify-center items-center overflow-hidden">
              <img
                className="h-48 w-full object-cover md:w-48 rounded-full border-2 border-gray-200"
                alt="プロフィール画像"
                src={image}
              />
            </div>
          )}
          <div className="p-6">
            <div className="uppercase tracking-wide text-lg font-bold">
              私の名前
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              data-testid="birthDay"
            >
              お誕生: {birthDay}
            </a>
            <p className="mt-2 text-gray-500">電話番号: {phoneNumber}</p>

            {image && (
              <a
                href={image}
                download="profile-image.png"
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
              >
                画像をダウンロード
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
);
