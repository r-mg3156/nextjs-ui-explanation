"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const accountFormSchema = z.object({
  lastName: z
    .string()
    .min(1, {
      message: "姓を入力してください",
    })
    .max(30, {
      message: "姓は30文字以下で入力してください",
    }),
  firstName: z.string().min(1, {
    message: "名を入力してください",
  }),
  kanaSei: z.string().min(1, { message: "カナ姓を入力してください。" }),
  kanaMei: z.string().min(1, { message: "カナ名を入力してください。" }),
  age: z.number().min(0, { message: "年齢は0以上の数字を入力してください。" }),
  gender: z.string(),
  prefecture: z.string().min(1, { message: "都道府県を入力してください。" }),
  city: z.string().min(1, { message: "市区町村を入力してください。" }),
  street: z.string().min(1, { message: "丁目・番地を入力してください。" }),
  phoneNumber: z.string().regex(/^\d{10,11}$/, {
    message: "電話番号は10桁または11桁の数字で入力してください。",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {};

const AccountFormOk = () => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {}

  return (
    <div className="container mx-auto max-w-6xl flex justify-center items-center min-h-screen">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>アカウント情報</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-[120px_1fr] gap-x-6 border-b pb-4">
                <div className="self-center text-right">
                  <label className="text-sm font-medium">氏名</label>
                </div>
                <div className="flex gap-x-4">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <div className="flex items-center">
                          <FormLabel className="mr-2 min-w-[30px] text-sm">
                            姓
                          </FormLabel>
                          <FormControl>
                            <Input className="max-w-xs" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <div className="flex items-center">
                          <FormLabel className="mr-2 min-w-[30px] text-sm">
                            名
                          </FormLabel>
                          <FormControl>
                            <Input className="max-w-xs" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-6 border-b pb-4">
                <div className="self-center text-right">
                  <label className="text-sm font-medium">カナ氏名</label>
                </div>
                <div className="flex gap-x-4">
                  <FormField
                    control={form.control}
                    name="kanaSei"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <div className="flex items-center">
                          <FormLabel className="mr-2 min-w-[30px] text-sm">
                            セイ
                          </FormLabel>
                          <FormControl>
                            <Input className="max-w-xs" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="kanaMei"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <div className="flex items-center">
                          <FormLabel className="mr-2 min-w-[30px] text-sm">
                            メイ
                          </FormLabel>
                          <FormControl>
                            <Input className="max-w-xs" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-6 border-b pb-4">
                <div className="self-center text-right">
                  <label htmlFor="age" className="text-sm font-medium">
                    年齢
                  </label>
                </div>
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-1">
                        <FormControl className="flex items-center">
                          <div>
                            <Input
                              className="max-w-[64px]"
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                            <span className="ml-2">歳</span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-6 border-b pb-4">
                <div className="self-center text-right">
                  <label htmlFor="age" className="text-sm font-medium">
                    性別
                  </label>
                </div>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-1">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                          >
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                男性
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                女性
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-6 border-b pb-4">
                <div className="self-center text-right">
                  <label htmlFor="age" className="text-sm font-medium">
                    電話番号
                  </label>
                </div>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <div className="space-y-1">
                        <FormControl>
                          <div className="flex items-center">
                            <Input
                              id="phoneNumber1"
                              className="max-w-[60px]"
                              maxLength={3}
                              placeholder="090"
                            />
                            <span className="mx-1">-</span>
                            <Input
                              id="phoneNumber2"
                              className="max-w-[60px]"
                              maxLength={4}
                              placeholder="1234"
                            />
                            <span className="mx-1">-</span>
                            <Input
                              id="phoneNumber3"
                              className="max-w-[60px]"
                              maxLength={4}
                              placeholder="5678"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-x-6 border-b pb-4">
                <div className="self-center text-right">
                  <label className="text-sm font-medium">住所</label>
                </div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="prefecture"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-x-4">
                        <FormLabel className="min-w-[80px] text-sm">
                          都道府県
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="max-w-sm"
                            placeholder="例: 東京都"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-x-4">
                        <FormLabel className="min-w-[80px] text-sm">
                          市区町村
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="max-w-sm"
                            placeholder="例: 新宿区"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-x-4">
                        <FormLabel className="min-w-[80px] text-sm">
                          丁目・番地
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="max-w-sm"
                            placeholder="例: 西新宿2-8-1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="relative flex justify-between items-center mt-6">
          <div className="w-1/3">
            <Button type="button" variant="ghost">
              修正する
            </Button>
          </div>

          <div className="w-1/3 flex justify-center">
            <Button type="submit" className="font-bold">
              入力内容を確認する
            </Button>
          </div>

          <div className="w-1/3"></div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AccountFormOk;
