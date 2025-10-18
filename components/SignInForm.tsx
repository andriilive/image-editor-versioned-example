import SignInFormClient from "@/components/SignInFormClient";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {getTranslations, type I18nLocale} from "@/lib/i18n";
import {testUser} from "@/lib/utils";

export default function SignInForm({
  lang,
  redirectUrl = '/user'
}: {
  lang: I18nLocale,
  redirectUrl?: string,
}) {
  const {t, getHref} = getTranslations(lang);
  const {email, password} = testUser;
  return (
    <SignInFormClient redirectUrl={getHref(redirectUrl)} className={"border border-gray-200 p-4 space-y-2"}>
      <>
        <h2 className="font-bold">
          {t('user.signIn')}
        </h2>
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
          {t('user.signIn')}
        </Button>
      </>
    </SignInFormClient>
  )
}
