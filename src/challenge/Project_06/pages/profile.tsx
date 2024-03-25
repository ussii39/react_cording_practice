import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ProfileCardComponent } from "../component/card";
import { ProfileFormComponent } from "../component/form";

interface FormValues {
  [key: string]: string | File;
}

export const ProfilePage = () => {
  const formList = [
    { type: "text", label: "お名前" },
    { type: "date", label: "お誕生日" },
    { type: "phone", label: "電話番号" },
    { type: "file", label: "プロフィール画像" },
  ];

  const [formValues, setFormValues] = useState<FormValues>({});
  const [imageURL, setImageURL] = useState<string>("");

  const handleFileChange = useCallback(
    (file: File, name: string) => {
      // 既存のイメージURLをクリーンアップ
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
      // 新しいイメージURLを生成
      const newImageURL = URL.createObjectURL(file);
      setImageURL(newImageURL);
      setFormValues((prevValues) => ({ ...prevValues, [name]: file }));
    },
    [imageURL]
  ); // imageURLを依存配列に追加

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, files } = event.target;
      if (files && files[0]) {
        handleFileChange(files[0], name);
      } else {
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
      }
    },
    [handleFileChange] // handleFileChangeを依存配列に追加
  );

  useEffect(() => {
    return () => {
      // コンポーネントのアンマウント時にイメージURLをクリーンアップ
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  // useMemo を使用してメモ化
  const memoizedCardProps = useMemo(
    () => ({
      image: imageURL || "/logo192.png",
      birthDay: (formValues["お誕生日"] as string) || "1996/11/14",
      phoneNumber: (formValues["電話番号"] as string) || "080-4444-3333",
    }),
    [imageURL, formValues["お誕生日"], formValues["電話番号"]]
  );

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="text-center text-2xl font-bold mt-5 mb-10">
        プロフィール自動作成
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <ProfileCardComponent
            image={memoizedCardProps.image}
            birthDay={memoizedCardProps.birthDay}
            phoneNumber={memoizedCardProps.phoneNumber}
          />
        </div>
        <div>
          {formList.map((form) => (
            <ProfileFormComponent
              key={form.label}
              onChange={onChange}
              type={form.type}
              label={form.label}
              value={(formValues[form.label] as string) || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
