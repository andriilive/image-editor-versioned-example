import SignUpFormClient from "@/components/SignUpFormClient";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {getTranslations, type I18nLocale} from "@/lib/i18n";
import {generateRandomUser} from "@/lib/utils";

export default function SignUpForm({
  lang,
  redirectUrl = '/user'
}: {
  lang: I18nLocale,
  redirectUrl?: string,
}) {
  const {t, getHref} = getTranslations(lang);
  const {name, email, password} = generateRandomUser();

  return (
    <SignUpFormClient redirectUrl={getHref(redirectUrl)} className={"border border-gray-200 p-4 space-y-2"}>
      <>
        <h2 className="font-bold">
          {t('user.signUp')}
        </h2>
        <Input
          name="name"
          defaultValue={name}
          placeholder={name}
          required
        />
        <Input
          name="email"
          type="email"
          defaultValue={email}
          placeholder={email}
          required
        />
        <Input
          name="password"
          type="password"
          defaultValue={password}
          placeholder={password}
          required
          minLength={8}
        />
        <Button type="submit">
          {t('user.signUp')}
        </Button>
      </>
    </SignUpFormClient>
  )
}
