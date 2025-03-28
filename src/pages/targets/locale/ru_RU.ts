const ru_RU = {
  title: 'Список хостов',
  default_filter: 'Стандартный фильтр',
  ungrouped_targets: 'Не сгруппированные хосты',
  all_targets: 'Все хосты',
  datasource: 'Источник данных',
  search_placeholder: 'Поиск по содержимому таблицы (несколько ключевых слов через пробел)',
  filterDowntime: 'Время простоя',
  filterDowntimeNegative: 'Время простоя (negative)',
  filterDowntimePositive: 'Время простоя (positive)',
  filterDowntimeNegativeMin: 'Время простоя - {{count}} минут назад было обновлено',
  filterDowntimePositiveMin: 'Время простоя - {{count}} минут назад не было обновлено',
  ident_copy_success: 'Успешно скопировано {{num}} записей',
  not_grouped: 'Не сгруппировано',
  host_ip: 'IP',
  host_tags: 'Теги хоста',
  tags: 'Пользовательские теги',
  group_obj: 'Бизнес-группа',
  target_up: 'Статус',
  mem_util: 'Память',
  cpu_util: 'CPU',
  cpu_num: 'Кол-во ядер',
  offset: 'Временной сдвиг',
  offset_tip: 'Логика расчета заключается в вычитании времени запуска categraf на хосте из времени запуска categraf на этом хосте',
  os: 'Операционная система',
  arch: 'Архитектура CPU',
  update_at: 'Время обновления',
  update_at_tip: '\n    1 минута назад было обновление: зеленое <1 />\n    3 минуты назад было обновление: желтое <1 />\n    3 минуты назад не было обновление: красное\n  ',
  remote_addr: 'Адрес источника',
  remote_addr_tip: 'Адрес источника получается из HTTP Header, если через прокси, это не обязательно реальный адрес источника',
  agent_version: 'Версия агента',
  note: 'Примечание',
  unknown_tip: 'Показ информации о хосте, версия categraf должна быть выше 0.2.35',
  organize_columns: {
    title: 'Поля для отображения',
  },
  targets: 'Объекты мониторинга',
  targets_placeholder: 'Пожалуйста, введите показатели объектов мониторинга, по одному на строку',
  copy: {
    current_page: 'Копировать текущую страницу',
    all: 'Копировать все',
    selected: 'Выбрать',
    no_data: 'Нет данных для копирования',
  },
  bind_tag: {
    title: 'Привязать тег',
    placeholder: 'Формат тега key=value, используйте Enter или пробел для разделения',
    msg1: 'Пожалуйста, выберите хотя бы один тег!',
    msg2: 'Неверный формат тега, пожалуйста, проверьте!',
    msg3: 'Тег key не может повторяться',
    render_tip1: 'Длина тега должна быть не более 64 символов',
    render_tip2: 'Формат тега должен быть key=value. key должен начинаться с буквы или подчеркивания и состоять из букв, цифр и подчеркиваний.',
  },
  unbind_tag: {
    title: 'Отвязать тег',
    placeholder: 'Пожалуйста, выберите тег для отвязки',
    msg: 'Пожалуйста, выберите хотя бы один тег!',
  },
  update_busi: {
    title: 'Изменить бизнес-группу',
    label: 'Принадлежность бизнес-группе',
    mode: {
      label: 'Режим',
      reset: 'Перезапись',
      add: 'Добавить',
      del: 'Удалить',
    },
    tags: 'Теги для привязки',
    tags_tip: 'Не перезаписываются теги, которые уже существуют',
  },
  remove_busi: {
    title: 'Удалить бизнес-группу',
    msg: 'Сообщение: удаление принадлежащей бизнес-группы. Сотрудники, ответственные за управление этими объектами, больше не смогут управлять ими! Возможно, вам потребуется предварительно очистить теги и примечания этих объектов.',
    btn: 'Удалить',
  },
  update_note: {
    title: 'Изменить примечание',
    placeholder: 'Если это поле пустое, это означает очистку примечания',
  },
  batch_delete: {
    title: 'Пакетное удаление',
    msg: 'Сообщение: эта операция удалит объекты из системы, что очень опасно, пожалуйста, будьте осторожны!',
    btn: 'Удалить',
  },
  meta_tip: 'Просмотр метаинформации',
  meta_title: 'Метаинформация',
  meta_desc_key: 'Ключ метаинформации',
  meta_desc_value: 'Значение метаинформации',
  meta_value_click_to_copy: 'Нажмите, чтобы скопировать',
  meta_expand: 'Развернуть',
  meta_collapse: 'Свернуть',
  meta_no_data: 'Нет данных',
  all_no_data: 'Не установлены сборщики данных? См. <a>руководство по установке</a>',
};

export default ru_RU;
