# Robotechnics Site

### Инструкция по настройке проекта:
1. Обновить pip
    ```bash
    pip install --upgrade pip
    ```
2. Установить необходимые пакеты: 
   ```bash
   pip install -r requirements.txt
   ```
3. Синхронизировать структуру базы данных с моделями: 
   ```bash
   python manage.py migrate
   ```

### Запуск проекта:
```bash
python manage.py runserver
```