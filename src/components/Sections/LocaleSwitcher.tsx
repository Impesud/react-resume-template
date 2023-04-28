import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslations} from 'next-intl';

export default function LocaleSwitcher(){
  const t = useTranslations('LocaleSwitcher');

  const {locale, locales, route} = useRouter();
  const firstLocale = locales?.find((cur) => cur !== locale);

  const baseClass =
  '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
  const switcherClass = classNames(baseClass, 'text-white-500 absolute top-0 right-0');

  return (
    <Link href={route} locale={firstLocale}>
      <a className={classNames(switcherClass)}>
        {t('switchLocale', {locale: firstLocale})}
      </a>
    </Link>
  );
}