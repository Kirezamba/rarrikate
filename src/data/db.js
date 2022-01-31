export const items = {
  individuals: {
    _id: 1,
    title: "Индивидуальные занятия",
    forWho: [
      { _id: 1, name: "ты любишь индивидуальную работу" },
      { _id: 2, name: "тебе нужна точечная проработка пробелов" },
      {
        _id: 3,
        name: "ты хочешь заниматься по персональной программе, учитывающей все твои цели и интересы ",
      },
      {
        _id: 4,
        name: "тебе приносят удовольствие уроки, подстроенные под твою индивидуальность",
      },
      {
        _id: 5,
        name: "тебе нужно повысить общий уровень знания языка",
      },
    ],
    howGoes: [
      { _id: 1, name: "встреча один, два или три раза в неделю в Zoom" },
      { _id: 2, name: "интерактивные уроки на платформах miro и progressme" },
      {
        _id: 3,
        name: "аутентичные материалы",
      },
      {
        _id: 4,
        name: "длительность 60/90 минут ",
      },
    ],
    whatReceive: [
      { _id: 1, name: "проработанные пробелы" },
      { _id: 2, name: "расширенный активный словарный запас" },
      {
        _id: 3,
        name: "выстроенная система языка",
      },
      {
        _id: 4,
        name: "чистую устную и письменную речь ",
      },
    ],
    tariffs: [
      { _id: 1, name: "Базовый:", price: "5899 руб (4/60)" },
      { _id: 2, name: "Улучшенный:", price: "7499 руб (4/90)" },
      { _id: 3, name: "Продвинутый:", price: "10399 руб (8/60)" },
      { _id: 4, name: "ВИП:", price: "14299 руб (8/90)" },
    ],
  },

  groups: {
    _id: 2,
    title: "Групповые занятия",
    forWho: [
      { _id: 1, name: "ты любишь групповую работу" },
      { _id: 2, name: "твоя цель – преодоление страха и языкового барьера" },
      {
        _id: 3,
        name: "ты хочешь прокачать разговорный навык",
      },
      {
        _id: 4,
        name: "тебе также нужно расширить словарный запас и повысить общий уровень знания",
      },
      {
        _id: 5,
        name: "тебе нужно повысить общий уровень знания языка",
      },
    ],
    howGoes: [
      { _id: 1, name: "встреча два раза в неделю в Zoom" },
      { _id: 2, name: "интерактивные уроки на платформах miro и progressme" },
      {
        _id: 3,
        name: "аутентичные материалы",
      },
      {
        _id: 4,
        name: "длительность 90 минут ",
      },
      {
        _id: 5,
        name: "группа из 3 – 4 человек",
      },
    ],
    whatReceive: [
      { _id: 1, name: "свободно общаешься на немецком" },
      { _id: 2, name: "преодоленный страх общения на немецком" },
      {
        _id: 3,
        name: "расширенный активный словарный запас",
      },
      {
        _id: 4,
        name: "выстроенная система языка",
      },
      {
        _id: 5,
        name: "взнакомство с людьми со схожими интересами",
      },
    ],
    tariffs: [{ _id: 1, name: "", price: "5999 руб (8/90)" }],
  },

  speakingClub: {
    _id: 3,
    title: "Разговорный клуб",
    forWho: [
      { _id: 1, name: "ты любишь групповую работу" },
      { _id: 2, name: "хочешь сделать упор на разговорном навыке" },
      {
        _id: 3,
        name: "любишь дискутировать на волнующие темы",
      },
      {
        _id: 4,
        name: "хочешь преодолеть языковой барьер",
      },
    ],
    howGoes: [
      { _id: 1, name: "встреча два раза в неделю в Zoom" },
      { _id: 2, name: "интерактивные уроки на платформе miro " },
      {
        _id: 3,
        name: "аутентичные материалы",
      },
      {
        _id: 4,
        name: "длительность 60/90 минут ",
      },
    ],
    whatReceive: [
      { _id: 1, name: "можешь высказаться на любую тему" },
      { _id: 2, name: "умеешь свободно отстаивать свою точку зрения на немецком" },
      {
        _id: 3,
        name: "свободно общаешься на немецком",
      },
      {
        _id: 4,
        name: "расширенный активный словарный запас",
      },
    ],
    tariffs: [{ _id: 1, name: "", price: "4350 руб (8/90)" }],
  },

  passiveIntensive: {
    _id: 4,
    title: "Интенсив по Passiv в записи",
    forWho: [
      {
        _id: 1,
        name: `Ты давно учишь язык и твой уровень В1 и выше, если тебе не нужны комплексные курсы, и ты хочешь решить проблему с пробелами в пассивном залоге. 


        Ты разберешься в теме раз и навсегда, поймешь алгоритмы, сократишь количество ошибок в данной теме на 90 процентов, а также - запомнишь спряжение глаголов в Passiv во всех временах и больше не будешь путать их между собой. 


        Плюсы: Экономия времени, быстрое готовое решение, нет воды, объяснение простыми словами, отработка на практике, выгодно в сравнении с общими курсами. Всем участникам интенсива скидка 10 процентов на первый месяц занятий и на абонемент в клуб. Обратной связи нет.`,
      },
    ],
    howGoes: [],
    whatReceive: [],
    tariffs: [{ _id: 1, name: "", price: "499 руб" }],
  },

  vocabulary: {
    _id: 5,
    title: "Подборка разговорный лексики",
    forWho: [
      {
        _id: 1,
        name: "В немецкой речи ты стремишься быть максимально похожим на носителя, то это подборка – то, что тебе нужно!",
      },
    ],
    howGoes: [],
    whatReceive: [],
    tariffs: [{ _id: 1, name: "", price: "299 руб" }],
  },
};
